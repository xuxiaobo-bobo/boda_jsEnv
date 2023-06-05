// SVGFESpotLightElement对象

bodavm.memory.globalobj['SVGFESpotLightElement'] = function SVGFESpotLightElement() {
  console.log_copy('SVGFESpotLightElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFESpotLightElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFESpotLightElement'], "SVGFESpotLightElement");
bodavm.memory.globalobj['SVGFESpotLightElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFESpotLightElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "z_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "pointsAtX", {
  configurable: true,
  enumerable: true,
  get: function pointsAtX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "pointsAtX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "pointsAtY", {
  configurable: true,
  enumerable: true,
  get: function pointsAtY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "pointsAtY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "pointsAtZ", {
  configurable: true,
  enumerable: true,
  get: function pointsAtZ() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "pointsAtZ_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "specularExponent", {
  configurable: true,
  enumerable: true,
  get: function specularExponent() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "specularExponent_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFESpotLightElement', "limitingConeAngle", {
  configurable: true,
  enumerable: true,
  get: function limitingConeAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFESpotLightElement'].prototype, "SVGFESpotLightElement", "limitingConeAngle_get", arguments);
  },
  set: undefined
}, 'prototype');