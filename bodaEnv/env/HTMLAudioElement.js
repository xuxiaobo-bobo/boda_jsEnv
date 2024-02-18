// HTMLAudioElement对象

bodaEnv.memory.globlProtoObj["HTMLAudioElement"] = function HTMLAudioElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HTMLAudioElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HTMLAudioElement"], "HTMLAudioElement");
bodaEnv.memory.globlProtoObj["HTMLAudioElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["HTMLMediaElement"].prototype;
bodaEnv.memory.globlProtoObj["HTMLAudioElement"].__proto__ = bodaEnv.memory.globlProtoObj["HTMLMediaElement"];