// CSSConditionRule对象
bodavm.memory.globalobj['CSSConditionRule'] = function CSSConditionRule(){if (!(this instanceof CSSConditionRule)){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};this._boisinit=bodavm.config.isinit}
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSConditionRule'], "CSSConditionRule");
bodavm.memory.globalobj['CSSConditionRule'].prototype.__proto__=bodavm.memory.globalobj['CSSGroupingRule'].prototype;
bodavm.memory.globalobj['CSSConditionRule'].__proto__=bodavm.memory.globalobj['CSSGroupingRule'];
bodavm.toolsFunc.defineProperty('CSSConditionRule', "conditionText", {configurable:true, enumerable:true, get:function conditionText (){return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSConditionRule'].prototype, "CSSConditionRule", "conditionText_get", arguments)}, set:undefined},'prototype');
