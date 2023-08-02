// SVGCircleElement对象

SVGCircleElement = function SVGCircleElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGCircleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGCircleElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGCircleElement, "SVGCircleElement");
SVGCircleElement.prototype.__proto__ = SVGGeometryElement.prototype;
SVGCircleElement.__proto__ = SVGGeometryElement;
bodavm.toolsFunc.defineProperty(SVGCircleElement.prototype, "cx", {
  configurable: true,
  enumerable: true,
  get: function cx() {
    return bodavm.toolsFunc.dispatch(this, SVGCircleElement.prototype, "SVGCircleElement", "cx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGCircleElement.prototype, "cy", {
  configurable: true,
  enumerable: true,
  get: function cy() {
    return bodavm.toolsFunc.dispatch(this, SVGCircleElement.prototype, "SVGCircleElement", "cy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGCircleElement.prototype, "r", {
  configurable: true,
  enumerable: true,
  get: function r() {
    return bodavm.toolsFunc.dispatch(this, SVGCircleElement.prototype, "SVGCircleElement", "r_get", arguments);
  },
  set: undefined
});