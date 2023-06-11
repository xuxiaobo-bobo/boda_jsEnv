// SVGRectElement对象
SVGRectElement = function SVGRectElement(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGRectElement) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGRectElement 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGRectElement, "SVGRectElement");
SVGRectElement.prototype.__proto__=SVGGeometryElement.prototype;
SVGRectElement.__proto__=SVGGeometryElement;
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "x", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "y", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "width", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "height", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "rx", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "ry", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "bodefault_get", arguments)}, set:undefined},);
