// GPUShaderModule对象

bodaEnv.memory.globlProtoObj["GPUShaderModule"] = function GPUShaderModule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUShaderModule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUShaderModule"], "GPUShaderModule");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUShaderModule"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUShaderModule"].prototype, "GPUShaderModule", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUShaderModule"].prototype, "GPUShaderModule", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUShaderModule"].prototype, "getCompilationInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCompilationInfo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUShaderModule"].prototype, "GPUShaderModule", "getCompilationInfo", arguments);
    }
  }.getCompilationInfo
});