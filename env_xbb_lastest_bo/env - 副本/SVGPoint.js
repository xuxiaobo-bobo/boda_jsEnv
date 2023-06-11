// SVGPoint对象
SVGPoint = function SVGPoint(){let arg=arguments[0];
if (arg!='bobo' && !(this instanceof SVGPoint) ){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")};bodavm.toolsFunc.symbolProperty(this);
if (arg =='bobo'){console.log_copy('SVGPoint 实例化对象 --->',JSON.stringify_bo(arguments,function(k,v){if (v==window){return 'window'}else{return v}}))};}

bodavm.toolsFunc.safeProto(SVGPoint, "SVGPoint");
bodavm.toolsFunc.defineProperty(SVGPoint.prototype, "x", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGPoint.prototype, "y", {configurable:true, enumerable:true, get:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "bodefault_get", arguments)}, set:function bodefault (){return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "bodefault_set", arguments)}},);
bodavm.toolsFunc.defineProperty(SVGPoint.prototype, "matrixTransform", {configurable:true, enumerable:true, writable:true, value:function matrixTransform (){return bodavm.toolsFunc.dispatch(this, SVGPoint.prototype, "SVGPoint", "matrixTransform", arguments)}},);
