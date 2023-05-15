// CSSMathProduct对象
bodavm.memory.globalobj['CSSMathProduct'] = function CSSMathProduct(){if (!(this instanceof CSSMathProduct)){return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathProduct': Arguments can't be empty")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMathProduct'], "CSSMathProduct");
bodavm.memory.globalobj['CSSMathProduct'].prototype.__proto__=bodavm.memory.globalobj['CSSMathValue'].prototype;
bodavm.memory.globalobj['CSSMathProduct'].__proto__=bodavm.memory.globalobj['CSSMathValue'];
bodavm.toolsFunc.defineProperty('CSSMathProduct', "values", {configurable:true, enumerable:true, get:function values (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMathProduct'].prototype, "CSSMathProduct", "values_get", arguments)}, set:undefined},'prototype');
