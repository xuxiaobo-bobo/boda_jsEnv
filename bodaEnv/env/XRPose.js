// XRPose对象

bodaEnv.memory.globlProtoObj["XRPose"] = function XRPose() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRPose 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRPose"], "XRPose");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRPose"].prototype, "transform", {
  configurable: true,
  enumerable: true,
  get: {
    transform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRPose"].prototype, "XRPose", "transform_get", arguments);
    }
  }.transform,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRPose"].prototype, "emulatedPosition", {
  configurable: true,
  enumerable: true,
  get: {
    emulatedPosition() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRPose"].prototype, "XRPose", "emulatedPosition_get", arguments);
    }
  }.emulatedPosition,
  set: undefined
});