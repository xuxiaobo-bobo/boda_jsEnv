// SVGTSpanElement对象

SVGTSpanElement = function SVGTSpanElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTSpanElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTSpanElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTSpanElement, "SVGTSpanElement");
SVGTSpanElement.prototype.__proto__ = SVGTextPositioningElement.prototype;
SVGTSpanElement.__proto__ = SVGTextPositioningElement;
bodavm.toolsFunc.defineProperty(SVGTSpanElement, "LENGTHADJUST_SPACINGANDGLYPHS", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGTSpanElement, "LENGTHADJUST_SPACING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGTSpanElement, "LENGTHADJUST_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});