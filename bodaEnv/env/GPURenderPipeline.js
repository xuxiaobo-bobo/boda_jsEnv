// GPURenderPipeline对象

bodaEnv.memory.globlProtoObj["GPURenderPipeline"] = function GPURenderPipeline() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPURenderPipeline 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPURenderPipeline"], "GPURenderPipeline");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPipeline"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPipeline"].prototype, "GPURenderPipeline", "label_get", arguments);
    }
  }.label,
  set: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPipeline"].prototype, "GPURenderPipeline", "label_set", arguments);
    }
  }.label
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPURenderPipeline"].prototype, "getBindGroupLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBindGroupLayout() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPURenderPipeline"].prototype, "GPURenderPipeline", "getBindGroupLayout", arguments);
    }
  }.getBindGroupLayout
});