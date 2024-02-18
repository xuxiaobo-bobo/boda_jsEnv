// GPUBindGroup对象

bodaEnv.memory.globlProtoObj["GPUBindGroup"] = function GPUBindGroup() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUBindGroup 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUBindGroup"], "GPUBindGroup");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBindGroup"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBindGroup"].prototype, "GPUBindGroup", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBindGroup"].prototype, "GPUBindGroup", "label_set", arguments);
    }
  }.label
});