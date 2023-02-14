// SVGGElement对象
SVGGElement = function SVGGElement(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
bodavm.toolsFunc.safeProto(SVGGElement, "SVGGElement");
SVGGElement.prototype.__proto__=SVGGraphicsElement.prototype;
SVGGElement.__proto__=SVGGraphicsElement;
