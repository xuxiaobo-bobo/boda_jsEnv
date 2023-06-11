// CSSKeywordValue对象
CSSKeywordValue = function CSSKeywordValue(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof CSSKeywordValue) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSKeywordValue': 1 argument required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('CSSKeywordValue 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(CSSKeywordValue, "CSSKeywordValue");
CSSKeywordValue.prototype.__proto__=CSSStyleValue.prototype;
CSSKeywordValue.__proto__=CSSStyleValue;
bodavm.toolsFunc.defineProperty(CSSKeywordValue.prototype, "value", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSKeywordValue.prototype, "CSSKeywordValue", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSKeywordValue.prototype, "CSSKeywordValue", "bodefault_set", arguments)}},);
