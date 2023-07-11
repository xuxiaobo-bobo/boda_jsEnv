bodavm.memory.notDefined['SpeechSynthesis'] = function SpeechSynthesis() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    console.log_copy('SpeechSynthesis 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
    this._boisinit = bodavm.config.isinit;
  }

  //return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
};

bodavm.toolsFunc.safeProto(bodavm.memory.notDefined['SpeechSynthesis'], "SpeechSynthesis");
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "cancel", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "cancel", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "getVoices", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function getVoices() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "getVoices", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "pause", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function pause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "pause", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "resume", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function resume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "resume", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "speak", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: function speak() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "speak", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "paused", {
  set: undefined,
  enumerable: true,
  configurable: true,
  get: function paused() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "paused_get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "pending", {
  set: undefined,
  enumerable: true,
  configurable: true,
  get: function pending() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "pending_get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "speaking", {
  set: undefined,
  enumerable: true,
  configurable: true,
  get: function speaking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "speaking_get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.notDefined['SpeechSynthesis'].prototype, "onvoiceschanged", {
  configurable: true,
  enumerable: true,
  get: function onvoiceschanged() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "onvoiceschanged_get", arguments);
  },
  set: function onvoiceschanged() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.notDefined['SpeechSynthesis'].prototype, "SpeechSynthesis", "onvoiceschanged_set", arguments);
  }
});
delete bodavm.memory.notDefined['SpeechSynthesis'].prototype.constructor;
// speechSynthesis对象