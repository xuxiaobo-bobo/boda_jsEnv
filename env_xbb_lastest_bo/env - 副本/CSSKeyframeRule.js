// CSSKeyframeRule对象
CSSKeyframeRule = function CSSKeyframeRule(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof CSSKeyframeRule) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('CSSKeyframeRule 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(CSSKeyframeRule, "CSSKeyframeRule");
CSSKeyframeRule.prototype.__proto__=CSSRule.prototype;
CSSKeyframeRule.__proto__=CSSRule;
bodavm.toolsFunc.defineProperty(CSSKeyframeRule.prototype, "keyText", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(CSSKeyframeRule.prototype, "style", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSKeyframeRule.prototype, "CSSKeyframeRule", "bodefault_set", arguments)}},);
