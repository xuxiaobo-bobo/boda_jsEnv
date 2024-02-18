// AudioWorklet对象

bodaEnv.memory.globlProtoObj["AudioWorklet"] = function AudioWorklet() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AudioWorklet 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AudioWorklet"], "AudioWorklet");
bodaEnv.memory.globlProtoObj["AudioWorklet"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Worklet"].prototype;
bodaEnv.memory.globlProtoObj["AudioWorklet"].__proto__ = bodaEnv.memory.globlProtoObj["Worklet"];