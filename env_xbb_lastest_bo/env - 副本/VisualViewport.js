// VisualViewport对象
VisualViewport = function VisualViewport(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof VisualViewport) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('VisualViewport 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(VisualViewport, "VisualViewport");
VisualViewport.prototype.__proto__=EventTarget.prototype;
VisualViewport.__proto__=EventTarget;
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetLeft", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "offsetTop", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "pageLeft", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "pageTop", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "scale", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "onresize", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(VisualViewport.prototype, "onscroll", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, VisualViewport.prototype, "VisualViewport", "bodefault_set", arguments)}},);
