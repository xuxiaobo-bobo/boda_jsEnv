// OfflineAudioCompletionEvent对象

bodavm.memory.globalobj['OfflineAudioCompletionEvent'] = function OfflineAudioCompletionEvent() {
  console.log_copy('OfflineAudioCompletionEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof OfflineAudioCompletionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioCompletionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['OfflineAudioCompletionEvent'], "OfflineAudioCompletionEvent");
bodavm.memory.globalobj['OfflineAudioCompletionEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['OfflineAudioCompletionEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('OfflineAudioCompletionEvent', "renderedBuffer", {
  configurable: true,
  enumerable: true,
  get: function renderedBuffer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['OfflineAudioCompletionEvent'].prototype, "OfflineAudioCompletionEvent", "renderedBuffer_get", arguments);
  },
  set: undefined
}, 'prototype');