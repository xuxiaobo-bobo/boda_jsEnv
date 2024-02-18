// GPUValidationError对象

bodaEnv.memory.globlProtoObj["GPUValidationError"] = function GPUValidationError() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPUValidationError 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPUValidationError"], "GPUValidationError");
bodaEnv.memory.globlProtoObj["GPUValidationError"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["GPUError"].prototype;
bodaEnv.memory.globlProtoObj["GPUValidationError"].__proto__ = bodaEnv.memory.globlProtoObj["GPUError"];