// SVGFEGaussianBlurElement对象

bodavm.memory.globalobj['SVGFEGaussianBlurElement'] = function SVGFEGaussianBlurElement() {
  console.log_copy('SVGFEGaussianBlurElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEGaussianBlurElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEGaussianBlurElement'], "SVGFEGaussianBlurElement");
bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEGaussianBlurElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "stdDeviationX", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "stdDeviationX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "stdDeviationY", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "stdDeviationY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEGaussianBlurElement', "setStdDeviation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStdDeviation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEGaussianBlurElement'].prototype, "SVGFEGaussianBlurElement", "setStdDeviation", arguments);
  }
}, 'prototype');