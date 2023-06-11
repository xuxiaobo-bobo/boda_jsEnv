// SpeechGrammarList对象
bodavm.memory.notDefined['SpeechGrammarList'] = function () {};
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['SpeechGrammarList'], "SpeechGrammarList");
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechGrammarList'].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechGrammarList'].prototype, "SpeechGrammarList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechGrammarList'].prototype, "addFromString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addFromString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechGrammarList'].prototype, "SpeechGrammarList", "addFromString", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechGrammarList'].prototype, "addFromUri", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addFromUri() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechGrammarList'].prototype, "SpeechGrammarList", "addFromUri", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechGrammarList'].prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechGrammarList'].prototype, "SpeechGrammarList", "item", arguments);
  }
});
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['SpeechGrammarList'], 'SpeechGrammarList');
webkitSpeechGrammarList = bodavm.memory.notDefined['SpeechGrammarList'];
delete bodavm.memory.notDefined['SpeechGrammarList'].constructor;