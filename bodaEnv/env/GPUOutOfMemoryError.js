// GPUOutOfMemoryError对象

bodaEnv.memory.globlProtoObj["GPUOutOfMemoryError"] = function GPUOutOfMemoryError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUOutOfMemoryError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUOutOfMemoryError"], "GPUOutOfMemoryError");
bodaEnv.memory.globlProtoObj["GPUOutOfMemoryError"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["GPUError"].prototype;
bodaEnv.memory.globlProtoObj["GPUOutOfMemoryError"].__proto__ = bodaEnv.memory.globlProtoObj["GPUError"];