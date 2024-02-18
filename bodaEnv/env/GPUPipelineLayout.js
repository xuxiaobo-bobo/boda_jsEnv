// GPUPipelineLayout对象

bodaEnv.memory.globlProtoObj["GPUPipelineLayout"] = function GPUPipelineLayout() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUPipelineLayout 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUPipelineLayout"], "GPUPipelineLayout");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUPipelineLayout"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUPipelineLayout"].prototype, "GPUPipelineLayout", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUPipelineLayout"].prototype, "GPUPipelineLayout", "label_set", arguments);
    }
  }.label
});