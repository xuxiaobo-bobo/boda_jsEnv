
/*
 * These models are very heavily based on their JavaRosa counterparts, which live at:
 * https://bitbucket.org/javarosa/javarosa/src/tip/core/src/org/javarosa/xpath/expr/
 *
 */

var SchemeNumber = require('./lib/schemeNumber.js').SchemeNumber;

if (!Function.prototype.bind) {
    // PhantomJS doesn't support bind yet
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs   = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
                return fToBind.apply(this instanceof fNOP ? this : oThis,
                                     aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

var defaultHashtagConfig = {
    // @param namespace - the namespace used in hashtag
    // @return - truthy value
    isValidNamespace: function (namespace) {
        return false;
    },
    // @param hashtagExpr - text of hashtag ex. #form/question
    // @return - the XPath or falsy value if no corresponding XPath found
    hashtagToXPath: function (hashtagExpr) {
        throw new Error("This should be overridden");
    },
    // @param xpath_ - XPath object (can be any of the objects defined in xpm
    // @returns - text representation of XPath in hashtag format (default
    //            implementation is to just return the XPath)
    toHashtag: function (xpath_) {
        return xpath_.toXPath();
    },
};

var makeXPathModels = function(hashtagConfig) {
    var xpm = {};
    xpm.DEBUG_MODE = false;
    hashtagConfig = hashtagConfig || defaultHashtagConfig;

    xpm.debuglog = function () {
        if (xpm.DEBUG_MODE) {
            var string = "";
            Array.prototype.slice.call(arguments).forEach(function (value) {
                string += value + ", ";
            });
            console.log(string);
        }
    };

    xpm.validateAxisName = function(name) {
        for (var i in xpm.XPathAxisEnum) {
            if (xpm.XPathAxisEnum.hasOwnProperty(i) && xpm.XPathAxisEnum[i] === name) {
                return xpm.XPathAxisEnum[i];
            }
        }
        throw name + " is not a valid axis name!";
    };

    // helper function
    var objToXPath = function(something) {
        return something.toXPath();
    };

    var objToHashtag = function (xpath_) {
        if (xpath_ instanceof xpm.HashtagExpr) {
            return xpath_.toHashtag();
        }
        return hashtagConfig.toHashtag(xpath_) || xpath_.toHashtag();
    };

    var objToHashtagWithCombine = function(self, combineFunc) {
        return function () {
            return hashtagConfig.toHashtag(self) || combineFunc(objToHashtag).bind(self)();
        };
    };

    xpm.XPathNumericLiteral = function(value) {
        /*
         * This is shockingly complicated for what should be simple thanks to
         * javascript number arithmetic.
         *
         * Use the big number library to hold the value, which will hold
         * large integers properly. For everything else, do the best rounding
         * we can when exporting, since xpath doesn't like scientific notation
         *
         */
        this.value = SchemeNumber(value);
        this.toString = function() {
            return "{num:" + this.value.toString() + "}";
        };
        this.toXPath = function() {
            // helper function
            var toFixed = function (x) {
              /*
               * Convert scientific notation formatted numbers to their decimal
               * counterparts
               *
               * HT: http://stackoverflow.com/questions/1685680/how-to-avoid-scientific-notation-for-large-numbers-in-javascript
               */
              var e;
              if (x < 1.0) {
                e = parseInt(x.toString().split('e-')[1]);
                if (e) {
                    x *= Math.pow(10,e-1);
                    x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
                }
              } else {
                e = parseInt(x.toString().split('+')[1]);
                if (e > 20) {
                    e -= 20;
                    x /= Math.pow(10,e);
                    x += (new Array(e+1)).join('0');
                }
              }
              return x;
            };
            return toFixed(this.value.toString());
        };
        this.toHashtag = this.toXPath;
        this.getChildren = function () {
           return [];
        };
        return this;
    };

    xpm.XPathStringLiteral = function(value) {
        var stringDelim = value[0];
        this.value = value = value.substr(1, value.length-2);
        this.stringDelim = stringDelim;

        var toXPathString = function(value) {
            return stringDelim + value + stringDelim;
        };

        this.valueDisplay = toXPathString(value);
        this.toString = function() {
            return "{str:" + this.valueDisplay + "}";
        };
        this.toXPath = function() {
            return this.valueDisplay;
        };
        this.toHashtag = this.toXPath;
        this.getChildren = function () {
           return [];
        };
        return this;
    };

    xpm.XPathVariableReference = function(value) {
        this.value = value;
        this.toString = function() {
            return "{var:" + String(this.value) + "}";
        };
        this.toXPath = function() {
            return "$" + String(this.value);
        };
        this.toHashtag = this.toXPath;
        this.getChildren = function () {
           return [];
        };
    };

    xpm.XPathAxisEnum = {
        CHILD: "child",
        DESCENDANT: "descendant",
        PARENT: "parent",
        ANCESTOR: "ancestor",
        FOLLOWING_SIBLING: "following-sibling",
        PRECEDING_SIBLING: "preceding-sibling",
        FOLLOWING: "following",
        PRECEDING: "preceding",
        ATTRIBUTE: "attribute",
        NAMESPACE: "namespace",
        SELF: "self",
        DESCENDANT_OR_SELF: "descendant-or-self",
        ANCESTOR_OR_SELF: "ancestor-or-self"
    };

    xpm.XPathTestEnum = {
        NAME: "name",
        NAME_WILDCARD: "*",
        NAMESPACE_WILDCARD: ":*",
        TYPE_NODE: "node()",
        TYPE_TEXT: "text()",
        TYPE_COMMENT: "comment()",
        TYPE_PROCESSING_INSTRUCTION: "processing-instruction"

    };

    xpm.XPathStep = function(definition) {
        /*
         * A step (part of a path)
         *
         */
        this.axis = definition.axis;
        this.test = definition.test;
        this.predicates = definition.predicates || [];
        this.name = definition.name;
        this.namespace = definition.namespace;
        this.literal = definition.literal;

        this.testString = function () {
             switch(this.test) {
                case xpm.XPathTestEnum.NAME:
                    return String(this.name);
                case xpm.XPathTestEnum.TYPE_PROCESSING_INSTRUCTION:
                    return "processing-instruction(" + (this.literal || "") + ")";
                case xpm.XPathTestEnum.NAMESPACE_WILDCARD:
                    return this.namespace + ":*";
                default:
                    return this.test || null;
             }
        };

        this.toString = function() {
            var stringArray = [];

            stringArray.push("{step:");
            stringArray.push(String(this.axis));
            stringArray.push(",");
            stringArray.push(this.testString());
            if (this.predicates.length > 0) {
                stringArray.push(",{");
                stringArray.push(this.predicates.join(","));
                stringArray.push("}");
            }

            stringArray.push("}");
            return stringArray.join("");
        };

        this.mainXPath = function () {
            var axisPrefix = this.axis + "::"; // this is the default
            // Use the abbreviated syntax to shorten the axis
            // or in some cases the whole thing
            switch (this.axis) {
                case xpm.XPathAxisEnum.DESCENDANT_OR_SELF:
                    if (this.test === xpm.XPathTestEnum.TYPE_NODE) {
                        return "//";
                    }
                    break;
                case xpm.XPathAxisEnum.CHILD:
                    axisPrefix = ""; // this is the default
                    break;
                case xpm.XPathAxisEnum.ATTRIBUTE:
                    axisPrefix = "@";
                    break;
                case xpm.XPathAxisEnum.SELF:
                    if (this.test === xpm.XPathTestEnum.TYPE_NODE) {
                        return ".";
                    }
                    break;
                case xpm.XPathAxisEnum.PARENT:
                    if (this.test === xpm.XPathTestEnum.TYPE_NODE) {
                        return "..";
                    }
                    break;
                default:
                   break;
            }
            return axisPrefix + this.testString();
        };
        this.predicateXPath = function (func) {
            if (this.predicates.length > 0) {
                return "[" + this.predicates.map(func).join("][") + "]";
            }
            return "";
        };
        function _combine (transFunc) {
            return function() {
                return this.mainXPath() + this.predicateXPath(transFunc);
            };
        }
        this.toXPath = _combine(objToXPath);
        this.toHashtag = objToHashtagWithCombine(this, _combine);
        this.getChildren = function () {
           return [];
        };

        return this;
    };

    xpm.XPathInitialContextEnum = {
        HASHTAG: "hashtag",
        ROOT: "abs",
        RELATIVE: "rel",
        EXPR: "expr"
    };

    xpm.XPathPathExpr = function(definition) {
        /**
         * an XPath path, which consists mainly of steps
         */
        var self = this;
        this.initial_context = definition.initial_context;
        this.steps = definition.steps || [];
        this.filter = definition.filter;
        this.toString = function() {
            var stringArray = [];
            stringArray.push("{path-expr:");
            stringArray.push(this.initial_context === xpm.XPathInitialContextEnum.EXPR ?
                             String(this.filter) : this.initial_context);
            stringArray.push(",{");
            stringArray.push(this.steps.join(","));
            stringArray.push("}}");
            return stringArray.join("");
        };
        var _combine = function (func) {
            return function () {
                // this helper function only exists so that
                // the two methods below it can call itx
                var parts = self.steps.map(func), ret = [], curPart, prevPart, sep;
                var root = (self.initial_context === xpm.XPathInitialContextEnum.ROOT) ? "/" : "";
                if (self.filter) {
                    parts.splice(0, 0, func(self.filter));
                }
                if (parts.length === 0) {
                    return root;
                }
                for (var i = 0; i < parts.length; i ++) {
                    curPart = parts[i];
                    if (curPart !== "//" && prevPart !== "//") {
                        // unless the current part starts with a slash, put slashes between
                        // parts. the only exception to this rule is at the beginning,
                        // when we only use a slash if it's an absolute path
                        sep = (i === 0) ? root : "/";
                        ret.push(sep);
                    }
                    ret.push(curPart);
                    prevPart = curPart;
                }
                return ret.join("");
            };
        };
        this.toXPath = _combine(objToXPath);
        this.toHashtag = objToHashtagWithCombine(this, _combine);
        // custom function to pull out any filters and just return the root path
        this.pathWithoutPredicates = _combine(function (step) { return step.mainXPath(); });

        this.getChildren = function () {
           return this.steps;
        };

        return this;
    };

    xpm.XPathFuncExpr = function (definition) {
        /**
         * Representation of an xpath function expression.
         */
        this.id = definition.id;                 //name of the function
        this.args = definition.args || [];       //argument list
        this.toString = function() {
            var stringArray = [];
            stringArray.push("{func-expr:", String(this.id), ",{");
            stringArray.push(this.args.join(","));
            stringArray.push("}}");
            return stringArray.join("");
        };
        function _combine (transFunc) {
            return function () {
                return this.id + "(" + this.args.map(transFunc).join(", ") + ")";
            };
        }
        this.toXPath = _combine(objToXPath);
        this.toHashtag = objToHashtagWithCombine(this, _combine);
        this.getChildren = function () {
           return this.args;
        };
        return this;
    };

    xpm.XPathFilterExpr = function (definition) {
        /**
         * Representation of an xpath filter expression.
         */
        this.expr = definition.expr;
        this.predicates = definition.predicates || [];
        this.toString = function() {
            var stringArray = [];
            stringArray.push("{filt-expr:", this.expr.toString(), ",{");
            stringArray.push(this.predicates.join(","));
            stringArray.push("}}");
            return stringArray.join("");
        };
        function _combine(transFunc) {
            return function() {
                var predicates = "";
                if (this.predicates.length > 0) {
                    predicates = "[" + this.predicates.map(transFunc).join("][") + "]";
                }
                var expr = objToXPath(this.expr);
                // FIXME should all non-function expressions be parenthesized?
                if (!(this.expr instanceof xpm.XPathFuncExpr)) {
                    expr = "(" + expr + ")";
                }
                return expr + predicates;
            };
        }
        this.toXPath = _combine(objToXPath);
        this.toHashtag = objToHashtagWithCombine(this, _combine);
        this.getChildren = function () {
           return this.predicates;
        };
        return this;
    };

    xpm.HashtagExpr = function (definition) {
        /**
         * an extension of xpath that's not really an xpath
         */
        var self = this;
        this.initial_context = definition.initial_context;
        if (!hashtagConfig.isValidNamespace(definition.namespace)) {
            throw new Error(definition.namespace + " is not a valid # expression");
        }
        this.namespace = definition.namespace;
        this.steps = definition.steps || [];
        this.toString = function() {
            var stringArray = [];
            stringArray.push("{hashtag-expr:");
            stringArray.push(this.namespace);
            stringArray.push(",{");
            stringArray.push(this.steps.join(","));
            stringArray.push("}}");
            return stringArray.join("");
        };
        var _combine = function () {
            var parts = [self.namespace].concat(self.steps),
                ret = [];
            for (var i = 0; i < parts.length; i ++) {
                // hashtag to start then /
                ret.push((i === 0) ? '#' : "/");
                ret.push(parts[i]);
            }
            return ret.join("");
        };
        this.toXPath = function () {
            return hashtagConfig.hashtagToXPath(this.toHashtag());
        };
        this.toHashtag = _combine;
        this.getChildren = function () {
           return [];
        };

        return this;
    };

    // expressions
    xpm.XPathExpressionTypeEnum = {
        /*
         * These aren't yet really used anywhere, but they are correct.
         * They correlate with the "type" field in the parser for ops.
         *
         */
        AND: "and",
        OR: "or",
        EQ: "==",
        NEQ: "!=",
        LT: "<",
        LTE: "<=",
        GT: ">",
        GTE: ">=",
        PLUS: "+",
        MINUS: "-",
        MULT: "*",
        DIV: "/",
        MOD: "%",
        UMINUS: "num-neg",
        UNION: "union"
    };

    var expressionTypeEnumToXPathLiteral = xpm.expressionTypeEnumToXPathLiteral = function (val) {
        switch (val) {
            case xpm.XPathExpressionTypeEnum.EQ:
                return "=";
            case xpm.XPathExpressionTypeEnum.MOD:
                return "mod";
            case xpm.XPathExpressionTypeEnum.DIV:
                return "div";
            case xpm.XPathExpressionTypeEnum.UMINUS:
                return "-";
            case xpm.XPathExpressionTypeEnum.UNION:
                return "|";
            default:
                return val;
        }
    };

    var binOpToString = function() {
        return "{binop-expr:" + this.type + "," + String(this.left) + "," + String(this.right) + "}";
    };

    var isOp = xpm.isOp = function(someToken) {
        /*
         * Whether something is an operation
         */
        // this is probably breaking an abstraction layer.
        var str = someToken.toString();
        return str.indexOf("{binop-expr:") === 0 || str.indexOf("{unop-expr:") === 0;
    };

    var isLiteral = xpm.isLiteral = function(someToken) {
        return (someToken instanceof xpm.XPathNumericLiteral ||
                someToken instanceof xpm.XPathStringLiteral ||
                someToken instanceof xpm.XPathPathExpr);
    };

    var isSimpleOp = xpm.isSimpleOp = function(someToken) {
        return isOp(someToken) && isLiteral(someToken.left) && isLiteral(someToken.right);
    };

    function printBinOp (func) {
        return function () {
            var ret = func(this.left) + " " + expressionTypeEnumToXPathLiteral(this.type) + " " + func(this.right);
            if (this.parens === true) {
                return "(" + ret + ")";
            }
            return ret;
        };
    }

    var binOpToXPath = printBinOp(objToXPath);
    var binOpToHashtag = printBinOp(objToHashtag);

    var binOpChildren = function () {
        return [this.left, this.right];
    };

    xpm.XPathBoolExpr = function(definition) {
        this.type = definition.type;
        this.left = definition.left;
        this.right = definition.right;
        this.toString = binOpToString;
        this.toXPath = binOpToXPath;
        this.toHashtag = binOpToHashtag.bind(this);
        this.getChildren = binOpChildren;
        return this;
    };

    xpm.XPathEqExpr = function(definition) {
        this.type = definition.type;
        this.left = definition.left;
        this.right = definition.right;
        this.toString = binOpToString;
        this.toXPath = binOpToXPath;
        this.toHashtag = binOpToHashtag.bind(this);
        this.getChildren = binOpChildren;
        return this;
    };

    xpm.XPathCmpExpr = function(definition) {
        this.type = definition.type;
        this.left = definition.left;
        this.right = definition.right;
        this.toString = binOpToString;
        this.toXPath = binOpToXPath;
        this.toHashtag = binOpToHashtag.bind(this);
        this.getChildren = binOpChildren;
        return this;
    };

    xpm.XPathArithExpr = function(definition) {
        this.type = definition.type;
        this.left = definition.left;
        this.right = definition.right;
        this.toString = binOpToString;
        this.toXPath = binOpToXPath;
        this.toHashtag = binOpToHashtag.bind(this);
        this.getChildren = binOpChildren;
        return this;
    };

    xpm.XPathUnionExpr = function(definition) {
        this.type = definition.type;
        this.left = definition.left;
        this.right = definition.right;
        this.toString = binOpToString;
        this.toXPath = binOpToXPath;
        this.toHashtag = binOpToHashtag.bind(this);
        this.getChildren = binOpChildren;
        return this;
    };

    xpm.XPathNumNegExpr = function(definition) {
        this.type = definition.type;
        this.value = definition.value;
        this.toString = function() {
            return "{unop-expr:" + this.type + "," + String(this.value) + "}";
        };
        function _combine(transFunc) {
            return function() {
                return "-" + transFunc(this.value);
            };
        }
        this.toXPath = _combine(objToXPath);
        this.toHashtag = _combine(objToHashtag);
        this.getChildren = function () {
           return [this.value];
        };
        return this;
    };

    return xpm;
};

if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
    exports.makeXPathModels = makeXPathModels;
}
