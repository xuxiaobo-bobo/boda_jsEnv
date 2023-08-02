// DeviceMotionEventRotationRate对象

DeviceMotionEventRotationRate = function DeviceMotionEventRotationRate() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DeviceMotionEventRotationRate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DeviceMotionEventRotationRate 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DeviceMotionEventRotationRate, "DeviceMotionEventRotationRate");
bodavm.toolsFunc.defineProperty(DeviceMotionEventRotationRate.prototype, "alpha", {
  configurable: true,
  enumerable: true,
  get: function alpha() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEventRotationRate.prototype, "DeviceMotionEventRotationRate", "alpha_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceMotionEventRotationRate.prototype, "beta", {
  configurable: true,
  enumerable: true,
  get: function beta() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEventRotationRate.prototype, "DeviceMotionEventRotationRate", "beta_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DeviceMotionEventRotationRate.prototype, "gamma", {
  configurable: true,
  enumerable: true,
  get: function gamma() {
    return bodavm.toolsFunc.dispatch(this, DeviceMotionEventRotationRate.prototype, "DeviceMotionEventRotationRate", "gamma_get", arguments);
  },
  set: undefined
});