// CSSPageRule对象
CSSPageRule = function CSSPageRule(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof CSSPageRule) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('CSSPageRule 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(CSSPageRule, "CSSPageRule");
CSSPageRule.prototype.__proto__=CSSRule.prototype;
CSSPageRule.__proto__=CSSRule;
bodavm.toolsFunc.defineProperty(CSSPageRule.prototype, "selectorText", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(CSSPageRule.prototype, "style", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSPageRule.prototype, "CSSPageRule", "bodefault_set", arguments)}},);
