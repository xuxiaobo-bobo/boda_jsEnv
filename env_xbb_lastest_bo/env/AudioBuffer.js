// AudioBuffer对象

AudioBuffer = function AudioBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioBuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioBuffer': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioBuffer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioBuffer, "AudioBuffer");
bodavm.toolsFunc.defineProperty(AudioBuffer.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBuffer", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioBuffer.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBuffer", "duration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioBuffer.prototype, "sampleRate", {
  configurable: true,
  enumerable: true,
  get: function sampleRate() {
    return bodavm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBuffer", "sampleRate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioBuffer.prototype, "numberOfChannels", {
  configurable: true,
  enumerable: true,
  get: function numberOfChannels() {
    return bodavm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBuffer", "numberOfChannels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioBuffer.prototype, "copyFromChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyFromChannel() {
    return bodavm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBuffer", "copyFromChannel", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioBuffer.prototype, "copyToChannel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyToChannel() {
    return bodavm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBuffer", "copyToChannel", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioBuffer.prototype, "getChannelData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getChannelData() {
    return bodavm.toolsFunc.dispatch(this, AudioBuffer.prototype, "AudioBuffer", "getChannelData", arguments);
  }
});