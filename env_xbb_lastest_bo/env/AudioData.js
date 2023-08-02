// AudioData对象

AudioData = function AudioData() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioData': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioData 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioData, "AudioData");
bodavm.toolsFunc.defineProperty(AudioData.prototype, "format", {
  configurable: true,
  enumerable: true,
  get: function format() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "format_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "sampleRate", {
  configurable: true,
  enumerable: true,
  get: function sampleRate() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "sampleRate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "numberOfFrames", {
  configurable: true,
  enumerable: true,
  get: function numberOfFrames() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "numberOfFrames_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "numberOfChannels", {
  configurable: true,
  enumerable: true,
  get: function numberOfChannels() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "numberOfChannels_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "duration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "allocationSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allocationSize() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "allocationSize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "clone", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioData.prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, AudioData.prototype, "AudioData", "copyTo", arguments);
  }
});