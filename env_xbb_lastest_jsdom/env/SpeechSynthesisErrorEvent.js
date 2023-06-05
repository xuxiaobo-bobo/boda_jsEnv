// SpeechSynthesisErrorEvent对象

bodavm.memory.globalobj['SpeechSynthesisErrorEvent'] = function SpeechSynthesisErrorEvent() {
  console.log_copy('SpeechSynthesisErrorEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SpeechSynthesisErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SpeechSynthesisErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SpeechSynthesisErrorEvent'], "SpeechSynthesisErrorEvent");
bodavm.memory.globalobj['SpeechSynthesisErrorEvent'].prototype.__proto__ = bodavm.memory.globalobj['SpeechSynthesisEvent'].prototype;
bodavm.memory.globalobj['SpeechSynthesisErrorEvent'].__proto__ = bodavm.memory.globalobj['SpeechSynthesisEvent'];
bodavm.toolsFunc.defineProperty('SpeechSynthesisErrorEvent', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SpeechSynthesisErrorEvent'].prototype, "SpeechSynthesisErrorEvent", "error_get", arguments);
  },
  set: undefined
}, 'prototype');