// DeviceMotionEventAcceleration对象

bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"] = function DeviceMotionEventAcceleration() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DeviceMotionEventAcceleration 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"], "DeviceMotionEventAcceleration");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"].prototype, "DeviceMotionEventAcceleration", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"].prototype, "DeviceMotionEventAcceleration", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"].prototype, "z", {
  configurable: true,
  enumerable: true,
  get: {
    z() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DeviceMotionEventAcceleration"].prototype, "DeviceMotionEventAcceleration", "z_get", arguments);
    }
  }.z,
  set: undefined
});