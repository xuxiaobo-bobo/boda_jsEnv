// AudioProcessingEvent对象

AudioProcessingEvent = function AudioProcessingEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioProcessingEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioProcessingEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioProcessingEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioProcessingEvent, "AudioProcessingEvent");
AudioProcessingEvent.prototype.__proto__ = Event.prototype;
AudioProcessingEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(AudioProcessingEvent.prototype, "playbackTime", {
  configurable: true,
  enumerable: true,
  get: function playbackTime() {
    return bodavm.toolsFunc.dispatch(this, AudioProcessingEvent.prototype, "AudioProcessingEvent", "playbackTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioProcessingEvent.prototype, "inputBuffer", {
  configurable: true,
  enumerable: true,
  get: function inputBuffer() {
    return bodavm.toolsFunc.dispatch(this, AudioProcessingEvent.prototype, "AudioProcessingEvent", "inputBuffer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioProcessingEvent.prototype, "outputBuffer", {
  configurable: true,
  enumerable: true,
  get: function outputBuffer() {
    return bodavm.toolsFunc.dispatch(this, AudioProcessingEvent.prototype, "AudioProcessingEvent", "outputBuffer_get", arguments);
  },
  set: undefined
});