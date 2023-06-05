// DeviceMotionEventRotationRate对象

bodavm.memory.globalobj['DeviceMotionEventRotationRate'] = function DeviceMotionEventRotationRate() {
  console.log_copy('DeviceMotionEventRotationRate 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DeviceMotionEventRotationRate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeviceMotionEventRotationRate'], "DeviceMotionEventRotationRate");
bodavm.toolsFunc.defineProperty('DeviceMotionEventRotationRate', "alpha", {
  configurable: true,
  enumerable: true,
  get: function alpha() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEventRotationRate'].prototype, "DeviceMotionEventRotationRate", "alpha_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceMotionEventRotationRate', "beta", {
  configurable: true,
  enumerable: true,
  get: function beta() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEventRotationRate'].prototype, "DeviceMotionEventRotationRate", "beta_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceMotionEventRotationRate', "gamma", {
  configurable: true,
  enumerable: true,
  get: function gamma() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEventRotationRate'].prototype, "DeviceMotionEventRotationRate", "gamma_get", arguments);
  },
  set: undefined
}, 'prototype');