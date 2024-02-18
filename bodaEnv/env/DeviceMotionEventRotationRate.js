// DeviceMotionEventRotationRate对象

bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"] = function DeviceMotionEventRotationRate() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DeviceMotionEventRotationRate 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"], "DeviceMotionEventRotationRate");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"].prototype, "alpha", {
  configurable: true,
  enumerable: true,
  get: {
    alpha() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"].prototype, "DeviceMotionEventRotationRate", "alpha_get", arguments);
    }
  }.alpha,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"].prototype, "beta", {
  configurable: true,
  enumerable: true,
  get: {
    beta() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"].prototype, "DeviceMotionEventRotationRate", "beta_get", arguments);
    }
  }.beta,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"].prototype, "gamma", {
  configurable: true,
  enumerable: true,
  get: {
    gamma() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEventRotationRate"].prototype, "DeviceMotionEventRotationRate", "gamma_get", arguments);
    }
  }.gamma,
  set: undefined
});