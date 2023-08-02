// SVGEllipseElement对象

SVGEllipseElement = function SVGEllipseElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGEllipseElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGEllipseElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGEllipseElement, "SVGEllipseElement");
SVGEllipseElement.prototype.__proto__ = SVGGeometryElement.prototype;
SVGEllipseElement.__proto__ = SVGGeometryElement;
bodavm.toolsFunc.defineProperty(SVGEllipseElement.prototype, "cx", {
  configurable: true,
  enumerable: true,
  get: function cx() {
    return bodavm.toolsFunc.dispatch(this, SVGEllipseElement.prototype, "SVGEllipseElement", "cx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGEllipseElement.prototype, "cy", {
  configurable: true,
  enumerable: true,
  get: function cy() {
    return bodavm.toolsFunc.dispatch(this, SVGEllipseElement.prototype, "SVGEllipseElement", "cy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGEllipseElement.prototype, "rx", {
  configurable: true,
  enumerable: true,
  get: function rx() {
    return bodavm.toolsFunc.dispatch(this, SVGEllipseElement.prototype, "SVGEllipseElement", "rx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGEllipseElement.prototype, "ry", {
  configurable: true,
  enumerable: true,
  get: function ry() {
    return bodavm.toolsFunc.dispatch(this, SVGEllipseElement.prototype, "SVGEllipseElement", "ry_get", arguments);
  },
  set: undefined
});