// VideoDecoder对象

VideoDecoder = function VideoDecoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof VideoDecoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VideoDecoder': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('VideoDecoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(VideoDecoder, "VideoDecoder");
VideoDecoder.prototype.__proto__ = EventTarget.prototype;
VideoDecoder.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(VideoDecoder, "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder, "VideoDecoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "decodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function decodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "decodeQueueSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "configure", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "decode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "flush", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoDecoder.prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, VideoDecoder.prototype, "VideoDecoder", "ondequeue_set", arguments);
  }
});