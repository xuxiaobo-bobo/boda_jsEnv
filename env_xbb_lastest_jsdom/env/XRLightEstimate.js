// XRLightEstimate对象

bodavm.memory.globalobj['XRLightEstimate'] = function XRLightEstimate() {
  console.log_copy('XRLightEstimate 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRLightEstimate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRLightEstimate'], "XRLightEstimate");
bodavm.toolsFunc.defineProperty('XRLightEstimate', "sphericalHarmonicsCoefficients", {
  configurable: true,
  enumerable: true,
  get: function sphericalHarmonicsCoefficients() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRLightEstimate'].prototype, "XRLightEstimate", "sphericalHarmonicsCoefficients_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRLightEstimate', "primaryLightDirection", {
  configurable: true,
  enumerable: true,
  get: function primaryLightDirection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRLightEstimate'].prototype, "XRLightEstimate", "primaryLightDirection_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRLightEstimate', "primaryLightIntensity", {
  configurable: true,
  enumerable: true,
  get: function primaryLightIntensity() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRLightEstimate'].prototype, "XRLightEstimate", "primaryLightIntensity_get", arguments);
  },
  set: undefined
}, 'prototype');