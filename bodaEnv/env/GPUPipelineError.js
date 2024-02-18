// GPUPipelineError对象

bodaEnv.memory.globlProtoObj["GPUPipelineError"] = function GPUPipelineError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUPipelineError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUPipelineError"], "GPUPipelineError");
bodaEnv.memory.globlProtoObj["GPUPipelineError"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["DOMException"].prototype;
bodaEnv.memory.globlProtoObj["GPUPipelineError"].__proto__ = bodaEnv.memory.globlProtoObj["DOMException"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUPipelineError"].prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: {
    reason() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUPipelineError"].prototype, "GPUPipelineError", "reason_get", arguments);
    }
  }.reason,
  set: undefined
});