// CSSRuleList对象
CSSRuleList = function CSSRuleList(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(CSSRuleList, "CSSRuleList");
bodavm.toolsFunc.defineProperty(CSSRuleList.prototype, "length", {configurable:true, enumerable:true, get:function length (){return bodavm.toolsFunc.dispatch(this, CSSRuleList.prototype, "CSSRuleList", "length_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(CSSRuleList.prototype, "item", {configurable:true, enumerable:true, writable:true, value:function item (){return bodavm.toolsFunc.dispatch(this, CSSRuleList.prototype, "CSSRuleList", "item", arguments)}});
