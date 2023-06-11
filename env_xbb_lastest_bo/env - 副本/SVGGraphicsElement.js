// SVGGraphicsElement对象
SVGGraphicsElement = function SVGGraphicsElement(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGGraphicsElement) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGGraphicsElement 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGGraphicsElement, "SVGGraphicsElement");
SVGGraphicsElement.prototype.__proto__=SVGElement.prototype;
SVGGraphicsElement.__proto__=SVGElement;
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "transform", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "nearestViewportElement", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "farthestViewportElement", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "requiredExtensions", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "systemLanguage", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getBBox", {configurable:true, enumerable:true, writable:true, value:function getBBox (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "getBBox", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getCTM", {configurable:true, enumerable:true, writable:true, value:function getCTM (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "getCTM", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGGraphicsElement.prototype, "getScreenCTM", {configurable:true, enumerable:true, writable:true, value:function getScreenCTM (){return bodavm.toolsFunc.dispatch(this, SVGGraphicsElement.prototype, "SVGGraphicsElement", "getScreenCTM", arguments)}},);
