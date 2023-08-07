// SpeechGrammar对象
bodavm.memory.notDefined['webkitSpeechGrammar'] = function () {
  let arg = arguments[0];
  if (arg != 'bobo') {
    console.log_copy('webkitSpeechGrammar 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['webkitSpeechGrammar'].prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['webkitSpeechGrammar'].prototype, "src", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['webkitSpeechGrammar'].prototype, "src", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['webkitSpeechGrammar'].prototype, "weight", {
  configurable: true,
  enumerable: true,
  get: function weight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['webkitSpeechGrammar'].prototype, "weight", "weight_get", arguments);
  },
  set: function weight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['webkitSpeechGrammar'].prototype, "weight", "weight_set", arguments);
  }
});
bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['webkitSpeechGrammar'], 'webkitSpeechGrammar');
delete bodavm.memory.notDefined['webkitSpeechGrammar'].constructor;
webkitSpeechGrammar = bodavm.memory.notDefined['webkitSpeechGrammar'];
//debugger;