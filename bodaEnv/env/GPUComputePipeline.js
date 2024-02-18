// GPUComputePipeline对象

bodaEnv.memory.globlProtoObj["GPUComputePipeline"] = function GPUComputePipeline() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUComputePipeline 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUComputePipeline"], "GPUComputePipeline");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePipeline"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePipeline"].prototype, "GPUComputePipeline", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePipeline"].prototype, "GPUComputePipeline", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUComputePipeline"].prototype, "getBindGroupLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBindGroupLayout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUComputePipeline"].prototype, "GPUComputePipeline", "getBindGroupLayout", arguments);
    }
  }.getBindGroupLayout
});