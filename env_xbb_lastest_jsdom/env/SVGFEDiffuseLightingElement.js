// SVGFEDiffuseLightingElement对象

bodavm.memory.globalobj['SVGFEDiffuseLightingElement'] = function SVGFEDiffuseLightingElement() {
  console.log_copy('SVGFEDiffuseLightingElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEDiffuseLightingElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEDiffuseLightingElement'], "SVGFEDiffuseLightingElement");
bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "surfaceScale", {
  configurable: true,
  enumerable: true,
  get: function surfaceScale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "surfaceScale_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "diffuseConstant", {
  configurable: true,
  enumerable: true,
  get: function diffuseConstant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "diffuseConstant_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "kernelUnitLengthX", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "kernelUnitLengthX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "kernelUnitLengthY", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "kernelUnitLengthY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDiffuseLightingElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDiffuseLightingElement'].prototype, "SVGFEDiffuseLightingElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');