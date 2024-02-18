// GPUDeviceLostInfo对象

bodaEnv.memory.globlProtoObj["GPUDeviceLostInfo"] = function GPUDeviceLostInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUDeviceLostInfo 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUDeviceLostInfo"], "GPUDeviceLostInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDeviceLostInfo"].prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: {
    reason() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDeviceLostInfo"].prototype, "GPUDeviceLostInfo", "reason_get", arguments);
    }
  }.reason,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUDeviceLostInfo"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUDeviceLostInfo"].prototype, "GPUDeviceLostInfo", "message_get", arguments);
    }
  }.message,
  set: undefined
});