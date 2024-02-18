// speechSynthesis对象
bodaEnv.memory.globlProtoObj['SpeechSynthesis'] = function SpeechSynthesis() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SpeechSynthesis 实例化对象参数为 ->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
    this._boisinit = bodaEnv.config.isinit;
  }

  //return bodaEnv.toolsFunc.throwError("TypeError", "Illegal constructor");
};

bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj['SpeechSynthesis'], "SpeechSynthesis");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "cancel", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    cancel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "cancel", arguments);
    }
  }.cancel
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "getVoices", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    getVoices() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "getVoices", arguments);
    }
  }.getVoices
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "pause", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    pause() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "pause", arguments);
    }
  }.pause
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "resume", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    resume() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "resume", arguments);
    }
  }.resume
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "speak", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: {
    speak() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "speak", arguments);
    }
  }.speak
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "paused", {
  set: undefined,
  enumerable: true,
  configurable: true,
  get: {
    paused() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "paused_get", arguments);
    }
  }.paused
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "pending", {
  set: undefined,
  enumerable: true,
  configurable: true,
  get: {
    pending() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "pending_get", arguments);
    }
  }.pending
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "speaking", {
  set: undefined,
  enumerable: true,
  configurable: true,
  get: {
    speaking() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "speaking_get", arguments);
    }
  }.speaking
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "onvoiceschanged", {
  configurable: true,
  enumerable: true,
  get: {
    onvoiceschanged() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "onvoiceschanged_get", arguments);
    }
  }.onvoiceschanged,
  set: {
    onvoiceschanged() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype, "SpeechSynthesis", "onvoiceschanged_set", arguments);
    }
  }.onvoiceschanged
});
delete bodaEnv.memory.globlProtoObj['SpeechSynthesis'].prototype.constructor;
// speechSynthesis对象
bodaEnv.memory.globlProtoObj["speechSynthesis"] = new bodaEnv.memory.globlProtoObj["SpeechSynthesis"]('bobo');