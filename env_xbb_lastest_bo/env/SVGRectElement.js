// SVGRectElement对象

SVGRectElement = function SVGRectElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGRectElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGRectElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGRectElement, "SVGRectElement");
SVGRectElement.prototype.__proto__ = SVGGeometryElement.prototype;
SVGRectElement.__proto__ = SVGGeometryElement;
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "rx", {
  configurable: true,
  enumerable: true,
  get: function rx() {
    return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "rx_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGRectElement.prototype, "ry", {
  configurable: true,
  enumerable: true,
  get: function ry() {
    return bodavm.toolsFunc.dispatch(this, SVGRectElement.prototype, "SVGRectElement", "ry_get", arguments);
  },
  set: undefined
});