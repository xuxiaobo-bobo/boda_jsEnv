// GPUInternalError对象

bodaEnv.memory.globlProtoObj["GPUInternalError"] = function GPUInternalError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUInternalError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUInternalError"], "GPUInternalError");
bodaEnv.memory.globlProtoObj["GPUInternalError"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["GPUError"].prototype;
bodaEnv.memory.globlProtoObj["GPUInternalError"].__proto__ = bodaEnv.memory.globlProtoObj["GPUError"];