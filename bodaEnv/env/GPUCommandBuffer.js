// GPUCommandBuffer对象

bodaEnv.memory.globlProtoObj["GPUCommandBuffer"] = function GPUCommandBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUCommandBuffer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUCommandBuffer"], "GPUCommandBuffer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCommandBuffer"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandBuffer"].prototype, "GPUCommandBuffer", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCommandBuffer"].prototype, "GPUCommandBuffer", "label_set", arguments);
    }
  }.label
});