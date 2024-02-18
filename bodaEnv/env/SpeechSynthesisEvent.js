// SpeechSynthesisEvent对象

bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"] = function SpeechSynthesisEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SpeechSynthesisEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"], "SpeechSynthesisEvent");
bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "utterance", {
  configurable: true,
  enumerable: true,
  get: {
    utterance() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "SpeechSynthesisEvent", "utterance_get", arguments);
    }
  }.utterance,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "charIndex", {
  configurable: true,
  enumerable: true,
  get: {
    charIndex() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "SpeechSynthesisEvent", "charIndex_get", arguments);
    }
  }.charIndex,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "charLength", {
  configurable: true,
  enumerable: true,
  get: {
    charLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "SpeechSynthesisEvent", "charLength_get", arguments);
    }
  }.charLength,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "elapsedTime", {
  configurable: true,
  enumerable: true,
  get: {
    elapsedTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "SpeechSynthesisEvent", "elapsedTime_get", arguments);
    }
  }.elapsedTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SpeechSynthesisEvent"].prototype, "SpeechSynthesisEvent", "name_get", arguments);
    }
  }.name,
  set: undefined
});