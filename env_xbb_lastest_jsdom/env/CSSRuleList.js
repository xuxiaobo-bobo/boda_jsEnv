// CSSRuleList对象
bodavm.memory.globalobj['CSSRuleList'] = function CSSRuleList(){if (!(this instanceof CSSRuleList)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSRuleList'], "CSSRuleList");
bodavm.toolsFunc.defineProperty('CSSRuleList', "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRuleList'].prototype, "CSSRuleList", "length_get", arguments)}, set:undefined},'prototype');
bodavm.toolsFunc.defineProperty('CSSRuleList', "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSRuleList'].prototype, "CSSRuleList", "item", arguments)}},'prototype');
