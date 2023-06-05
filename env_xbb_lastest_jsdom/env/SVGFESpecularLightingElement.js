// SVGFESpecularLightingElement对象

bodavm.memory.globalobj['SVGFESpecularLightingElement'] = function SVGFESpecularLightingElement() {
  console.log_copy('SVGFESpecularLightingElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFESpecularLightingElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFESpecularLightingElement'], "SVGFESpecularLightingElement");
bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFESpecularLightingElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "in1", {
  configurable: true,
  enumerable: true,
  get: function in1() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "in1_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "surfaceScale", {
  configurable: true,
  enumerable: true,
  get: function surfaceScale() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "surfaceScale_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "specularConstant", {
  configurable: true,
  enumerable: true,
  get: function specularConstant() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "specularConstant_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "specularExponent", {
  configurable: true,
  enumerable: true,
  get: function specularExponent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "specularExponent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "kernelUnitLengthX", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "kernelUnitLengthX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "kernelUnitLengthY", {
  configurable: true,
  enumerable: true,
  get: function kernelUnitLengthY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "kernelUnitLengthY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpecularLightingElement', "result", {
  configurable: true,
  enumerable: true,
  get: function result() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpecularLightingElement'].prototype, "SVGFESpecularLightingElement", "result_get", arguments);
  },
  set: undefined
}, 'prototype');