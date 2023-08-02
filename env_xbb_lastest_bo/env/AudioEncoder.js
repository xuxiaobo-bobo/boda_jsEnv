// AudioEncoder对象

AudioEncoder = function AudioEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AudioEncoder': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioEncoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioEncoder, "AudioEncoder");
AudioEncoder.prototype.__proto__ = EventTarget.prototype;
AudioEncoder.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(AudioEncoder, "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder, "AudioEncoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "encodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function encodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "encodeQueueSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "configure", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encode() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "encode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "flush", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioEncoder.prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, AudioEncoder.prototype, "AudioEncoder", "ondequeue_set", arguments);
  }
});