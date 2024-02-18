// GPUBindGroupLayout对象

bodaEnv.memory.globlProtoObj["GPUBindGroupLayout"] = function GPUBindGroupLayout() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUBindGroupLayout 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUBindGroupLayout"], "GPUBindGroupLayout");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUBindGroupLayout"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBindGroupLayout"].prototype, "GPUBindGroupLayout", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUBindGroupLayout"].prototype, "GPUBindGroupLayout", "label_set", arguments);
    }
  }.label
});