// Audio对象

bodaEnv.memory.globlProtoObj["Audio"] = function Audio() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Audio 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Audio"], "Audio");
bodaEnv.memory.globlProtoObj["Audio"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype;