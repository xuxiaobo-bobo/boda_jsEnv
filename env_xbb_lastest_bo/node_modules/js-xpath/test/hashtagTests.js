(function() {
    function makeXPathConfig(validHashtagNamespaces, translationDict) {
        return {
            isValidNamespace: function (value) {
                return validHashtagNamespaces.indexOf(value) !== -1;
            },
            hashtagToXPath: function (hashtagExpr) {
                if (translationDict[hashtagExpr]) {
                    return translationDict[hashtagExpr];
                }
                throw new Error("Can't translate this hashtag to an XPath");
            },
            toHashtag: function (xpath_) {
                function toHashtag(xpathExpr) {
                    for (var key in translationDict) {
                        if (translationDict.hasOwnProperty(key)) {
                            if (translationDict[key] === xpathExpr)
                                return key;
                        }
                    }
                    return null;
                }

                return toHashtag(xpath_.toXPath());
            },
        };
    }

    var runCommon = function(testcases, validHashtagNamespaces) {
        xpath.setXPathModels(xpath.makeXPathModels(makeXPathConfig(validHashtagNamespaces, {})));
        for (var i in testcases) {
            if (testcases.hasOwnProperty(i)) {
                try {
                    equal(xpath.parse(i).toString(), testcases[i], "" + i + " parsed correctly.");
                } catch(err) {
                    ok(false, "" + err + " for input: " + i);
                }
            }
        }
    };
    var runFailures = function(testcases, validHashtagNamespaces) {
        function tmpFunc() {
            xpath.parse(i);
        }
        xpath.setXPathModels(xpath.makeXPathModels(makeXPathConfig(validHashtagNamespaces, {})));
        for (var i in testcases) {
            if (testcases.hasOwnProperty(i)) {
                raises(tmpFunc, testcases[i], "" + i + " correctly failed to parse.");
            }
        }
    };
    var runGeneratorTests = function(testcases, translationDict, namespaces) {
        xpath.setXPathModels(xpath.makeXPathModels(makeXPathConfig(namespaces, translationDict)));
        var parsed;
        for (var i in testcases) {
            if (testcases.hasOwnProperty(i)) {
                try {
                    parsed = xpath.parse(i);
                    equal(parsed.toXPath(), testcases[i], "" + i + " generated correctly.");
                    // It seems reasonable to expect that the generated xpath
                    // should parse back to the same object, although this may 
                    // not always hold true.
                    equal(parsed.toString(), xpath.parse(parsed.toHashtag()).toString(), "" + i + " produced same result when reparsed.");
                } catch(err) {
                    ok(false, "" + err + " for input: " + i);
                }
            }
        }
    };

    test("hashtag parsing", function () {
        var namespaces = ['form', 'case'];
        runCommon({
            "#form/question": "{hashtag-expr:form,{question}}",
            "#form/group/question": "{hashtag-expr:form,{group,question}}",
            "#case/type/prop": "{hashtag-expr:case,{type,prop}}",
        }, namespaces);
        runFailures({
            "#": null,
            "#case/type/prop[filter=filter]": null,
            "#/case/type/prop": null,
            "#whale/orca": null,
        }, namespaces);
    });

    test("generator hashtags", function () {
        var transDict = {
                '#form/question': '/data/question',
                '#form/group/question': '/data/group/question',
                '#case/question': "instance('casedb')/cases/case[@case_id = case_id]/question",
            },
            testCases = {
                "#form/question": "/data/question",
                "#form/group/question": "/data/group/question",
                "#form/question = #case/question": "/data/question = instance('casedb')/cases/case[@case_id = case_id]/question",
                "#form/question     =    #case/question": "/data/question = instance('casedb')/cases/case[@case_id = case_id]/question",
                "/data/filtered[@id = #form/question]": "/data/filtered[@id = /data/question]"
            };

        runGeneratorTests(testCases, transDict, ['form', 'case']);
    });

    test("hashtags with no xpath", function() {
        xpath.setXPathModels(xpath.makeXPathModels(makeXPathConfig(['form', 'case'], {})));

        var testcases = {
            "#form/question1": "/data/question1",
        };
        var parsed;
        for (var i in testcases) {
            if (testcases.hasOwnProperty(i)) {
                parsed = xpath.parse(i);
                ok(true, i + " correctly parsed");
                try {
                    parsed.toXPath();
                    ok(false, "This should not be translatable");
                } catch(err) {
                    ok(true, err);
                }
            }
        }
    });

    test("from xpath to hashtag", function() {
        var translationDict = {
                '#form': '/data',
                '#form/question': '/data/question',
                '#form/question2': '/data/question2',
                '#form/group/question': '/data/group/question',
                '#case/question': "instance('casedb')/cases/case[@case_id = case_id]/question",
            };

        xpath.setXPathModels(xpath.makeXPathModels(makeXPathConfig(['form', 'case'], translationDict)));

        var testcases = {
            "/data": "#form",
            "/data/question": "#form/question",
            "/data/question + /data/question2": "#form/question + #form/question2",
            "/data/question = instance('casedb')/cases/case[@case_id = case_id]/question": "#form/question = #case/question",
            "/data/filtered[/data/question = 1]": "/data/filtered[#form/question = 1]",
            "function   ( 5, 'arg', 4 * 12, /data/filtered[/data/question = 1])": "function(5, 'arg', 4 * 12, /data/filtered[#form/question = 1])",
            "bunch-o-nodes()[3][/data/question !='galore']": "bunch-o-nodes()[3][#form/question != 'galore']",
            "-some-function(/data/question)": "-some-function(#form/question)",
        };

        var parsed;
        for (var i in testcases) {
            if (testcases.hasOwnProperty(i)) {
                parsed = xpath.parse(i);
                ok(true, i + " correctly parsed");
                equal(parsed.toHashtag(), testcases[i]);
            }
        }
    });
})();
