// CSSScale对象
CSSScale = function CSSScale(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof CSSScale) ){return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSScale': 2 arguments required, but only 0 present.")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('CSSScale 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(CSSScale, "CSSScale");
CSSScale.prototype.__proto__=CSSTransformComponent.prototype;
CSSScale.__proto__=CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSScale.prototype, "x", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(CSSScale.prototype, "y", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(CSSScale.prototype, "z", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, CSSScale.prototype, "CSSScale", "bodefault_set", arguments)}},);
