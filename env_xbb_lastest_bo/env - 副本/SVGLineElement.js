// SVGLineElement对象
SVGLineElement = function SVGLineElement(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGLineElement) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGLineElement 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGLineElement, "SVGLineElement");
SVGLineElement.prototype.__proto__=SVGGeometryElement.prototype;
SVGLineElement.__proto__=SVGGeometryElement;
bodavm.toolsFunc.defineProperty(SVGLineElement.prototype, "x1", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGLineElement.prototype, "y1", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGLineElement.prototype, "x2", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "bodefault_get", arguments)}, set:undefined},);
bodavm.toolsFunc.defineProperty(SVGLineElement.prototype, "y2", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGLineElement.prototype, "SVGLineElement", "bodefault_get", arguments)}, set:undefined},);
