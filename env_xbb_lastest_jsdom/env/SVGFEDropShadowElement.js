// SVGFEDropShadowElement对象

bodavm.memory.globalobj['SVGFEDropShadowElement'] = function SVGFEDropShadowElement() {
  console.log_copy('SVGFEDropShadowElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEDropShadowElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEDropShadowElement'], "SVGFEDropShadowElement");
bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEDropShadowElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "dx", {
  configurable: true,
  enumerable: true,
  get: function dx() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "dx_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "dy", {
  configurable: true,
  enumerable: true,
  get: function dy() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "dy_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "stdDeviationX", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "stdDeviationX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "stdDeviationY", {
  configurable: true,
  enumerable: true,
  get: function stdDeviationY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "stdDeviationY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDropShadowElement', "setStdDeviation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStdDeviation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDropShadowElement'].prototype, "SVGFEDropShadowElement", "setStdDeviation", arguments);
  }
}, 'prototype');