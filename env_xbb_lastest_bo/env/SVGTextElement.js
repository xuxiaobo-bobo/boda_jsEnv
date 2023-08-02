// SVGTextElement对象

SVGTextElement = function SVGTextElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTextElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTextElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTextElement, "SVGTextElement");
SVGTextElement.prototype.__proto__ = SVGTextPositioningElement.prototype;
SVGTextElement.__proto__ = SVGTextPositioningElement;
bodavm.toolsFunc.defineProperty(SVGTextElement, "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTextElement, "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTextElement, "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});