// SVGFEGaussianBlurElement对象

SVGFEGaussianBlurElement = function SVGFEGaussianBlurElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGFEGaussianBlurElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGFEGaussianBlurElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGFEGaussianBlurElement, "SVGFEGaussianBlurElement");
SVGFEGaussianBlurElement.prototype.__proto__ = SVGElement.prototype;
SVGFEGaussianBlurElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "in1_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "stdDeviationX", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationX() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "stdDeviationX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "stdDeviationY", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationY() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "stdDeviationY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "result_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGFEGaussianBlurElement.prototype, "setStdDeviation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStdDeviation() {
    return bodavm.toolsFunc.dispatch(this, SVGFEGaussianBlurElement.prototype, "SVGFEGaussianBlurElement", "setStdDeviation", arguments);
  }
});