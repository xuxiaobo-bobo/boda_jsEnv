// AudioDecoder对象

AudioDecoder = function AudioDecoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioDecoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioDecoder': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioDecoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioDecoder, "AudioDecoder");
AudioDecoder.prototype.__proto__ = EventTarget.prototype;
AudioDecoder.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(AudioDecoder, "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder, "AudioDecoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "decodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function decodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "decodeQueueSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "configure", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "decode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "flush", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioDecoder.prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, AudioDecoder.prototype, "AudioDecoder", "ondequeue_set", arguments);
  }
});