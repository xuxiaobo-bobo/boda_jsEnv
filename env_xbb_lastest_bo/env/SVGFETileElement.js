// SVGFETileElement对象

SVGFETileElement = function SVGFETileElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFETileElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFETileElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFETileElement, "SVGFETileElement");
SVGFETileElement.prototype.__proto__ = SVGElement.prototype;
SVGFETileElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFETileElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFETileElement.prototype, "SVGFETileElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETileElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFETileElement.prototype, "SVGFETileElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETileElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFETileElement.prototype, "SVGFETileElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETileElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFETileElement.prototype, "SVGFETileElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETileElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFETileElement.prototype, "SVGFETileElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFETileElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFETileElement.prototype, "SVGFETileElement", "result_get", arguments);
  },
  set: undefined
});