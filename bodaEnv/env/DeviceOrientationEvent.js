// DeviceOrientationEvent对象

bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"] = function DeviceOrientationEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DeviceOrientationEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"], "DeviceOrientationEvent");
bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "alpha", {
  configurable: true,
  enumerable: true,
  get: {
    alpha() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "DeviceOrientationEvent", "alpha_get", arguments);
    }
  }.alpha,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "beta", {
  configurable: true,
  enumerable: true,
  get: {
    beta() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "DeviceOrientationEvent", "beta_get", arguments);
    }
  }.beta,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "gamma", {
  configurable: true,
  enumerable: true,
  get: {
    gamma() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "DeviceOrientationEvent", "gamma_get", arguments);
    }
  }.gamma,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "absolute", {
  configurable: true,
  enumerable: true,
  get: {
    absolute() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceOrientationEvent"].prototype, "DeviceOrientationEvent", "absolute_get", arguments);
    }
  }.absolute,
  set: undefined
});