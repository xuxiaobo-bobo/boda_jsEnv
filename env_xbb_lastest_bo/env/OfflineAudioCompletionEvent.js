// OfflineAudioCompletionEvent对象

OfflineAudioCompletionEvent = function OfflineAudioCompletionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof OfflineAudioCompletionEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'OfflineAudioCompletionEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('OfflineAudioCompletionEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(OfflineAudioCompletionEvent, "OfflineAudioCompletionEvent");
OfflineAudioCompletionEvent.prototype.__proto__ = Event.prototype;
OfflineAudioCompletionEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(OfflineAudioCompletionEvent.prototype, "renderedBuffer", {
  configurable: true,
  enumerable: true,
  get: function renderedBuffer() {
    return bodavm.toolsFunc.dispatch(this, OfflineAudioCompletionEvent.prototype, "OfflineAudioCompletionEvent", "renderedBuffer_get", arguments);
  },
  set: undefined
});