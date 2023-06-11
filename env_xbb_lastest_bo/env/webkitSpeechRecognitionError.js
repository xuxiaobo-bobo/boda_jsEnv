// SpeechRecognitionErrorEvent对象
bodavm.memory.notDefined['SpeechRecognitionErrorEvent'] = function SpeechRecognitionErrorEvent() {
  return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechRecognitionErrorEvent': 1 argument required, but only 0 present.");
};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['SpeechRecognitionErrorEvent'], "SpeechRecognitionErrorEvent");
bodavm.memory.notDefined['SpeechRecognitionErrorEvent'].prototype.__proto__ = Event.prototype;
bodavm.memory.notDefined['SpeechRecognitionErrorEvent'].__proto__ = Event;
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechRecognitionErrorEvent'].prototype, "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechRecognitionErrorEvent'].prototype, "SpeechRecognitionErrorEvent", "error_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechRecognitionErrorEvent'].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechRecognitionErrorEvent'].prototype, "SpeechRecognitionErrorEvent", "message_get", arguments);
  },
  set: undefined
});
webkitSpeechRecognitionError = bodavm.memory.notDefined['SpeechRecognitionErrorEvent'];