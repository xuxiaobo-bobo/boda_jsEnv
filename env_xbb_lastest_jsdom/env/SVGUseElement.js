// SVGUseElement对象
SVGUseElement = function SVGUseElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGUseElement, "SVGUseElement");
SVGUseElement.prototype.__proto__=SVGGraphicsElement.prototype;
SVGUseElement.__proto__=SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "x", {configurable:true, enumerable:true, get:function x (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "x_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "y", {configurable:true, enumerable:true, get:function y (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "y_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "width", {configurable:true, enumerable:true, get:function width (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "width_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "height", {configurable:true, enumerable:true, get:function height (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "height_get", arguments)}, set:undefined});
bodavm.toolsFunc.defineProperty(SVGUseElement.prototype, "href", {configurable:true, enumerable:true, get:function href (){return bodavm.toolsFunc.dispatch(this, SVGUseElement.prototype, "SVGUseElement", "href_get", arguments)}, set:undefined});
