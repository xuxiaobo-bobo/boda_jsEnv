// GPUCompilationInfo对象

bodaEnv.memory.globlProtoObj["GPUCompilationInfo"] = function GPUCompilationInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUCompilationInfo 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUCompilationInfo"], "GPUCompilationInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPUCompilationInfo"].prototype, "messages", {
  configurable: true,
  enumerable: true,
  get: {
    messages() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPUCompilationInfo"].prototype, "GPUCompilationInfo", "messages_get", arguments);
    }
  }.messages,
  set: undefined
});