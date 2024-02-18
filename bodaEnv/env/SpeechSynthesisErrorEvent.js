// SpeechSynthesisErrorEvent对象

bodaEnv.memory.globlProtoObj["SpeechSynthesisErrorEvent"] = function SpeechSynthesisErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SpeechSynthesisErrorEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SpeechSynthesisErrorEvent"], "SpeechSynthesisErrorEvent");
bodaEnv.memory.globlProtoObj["SpeechSynthesisErrorEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype;
bodaEnv.memory.globlProtoObj["SpeechSynthesisErrorEvent"].__proto__ = bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisErrorEvent"].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: {
    error() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisErrorEvent"].prototype, "SpeechSynthesisErrorEvent", "error_get", arguments);
    }
  }.error,
  set: undefined
});