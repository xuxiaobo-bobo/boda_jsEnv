// SVGFEComponentTransferElement对象

SVGFEComponentTransferElement = function SVGFEComponentTransferElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEComponentTransferElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEComponentTransferElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEComponentTransferElement, "SVGFEComponentTransferElement");
SVGFEComponentTransferElement.prototype.__proto__ = SVGElement.prototype;
SVGFEComponentTransferElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEComponentTransferElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEComponentTransferElement.prototype, "SVGFEComponentTransferElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEComponentTransferElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEComponentTransferElement.prototype, "SVGFEComponentTransferElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEComponentTransferElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEComponentTransferElement.prototype, "SVGFEComponentTransferElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEComponentTransferElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEComponentTransferElement.prototype, "SVGFEComponentTransferElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEComponentTransferElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEComponentTransferElement.prototype, "SVGFEComponentTransferElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEComponentTransferElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEComponentTransferElement.prototype, "SVGFEComponentTransferElement", "result_get", arguments);
  },
  set: undefined
});