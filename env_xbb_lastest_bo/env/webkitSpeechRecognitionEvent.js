// SpeechRecognitionEvent对象
// SpeechRecognitionEvent对象
bodavm.memory.notDefined['SpeechRecognitionEvent'] = function SpeechRecognitionEvent() {
  return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechRecognitionEvent': 1 argument required, but only 0 present.");
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['SpeechRecognitionEvent'], "SpeechRecognitionEvent");
bodavm.memory.notDefined['SpeechRecognitionEvent'].prototype.__proto__ = Event.prototype;
bodavm.memory.notDefined['SpeechRecognitionEvent'].__proto__ = Event;
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechRecognitionEvent'].prototype, "resultIndex", {
  configurable: true,
  enumerable: true,
  get: function resultIndex() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechRecognitionEvent'].prototype, "SpeechRecognitionEvent", "resultIndex_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechRecognitionEvent'].prototype, "results", {
  configurable: true,
  enumerable: true,
  get: function results() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechRecognitionEvent'].prototype, "SpeechRecognitionEvent", "results_get", arguments);
  },
  set: undefined
});
webkitSpeechRecognitionEvent = bodavm.memory.notDefined['SpeechRecognitionEvent'];