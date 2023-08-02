// VideoEncoder对象

VideoEncoder = function VideoEncoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof VideoEncoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VideoEncoder': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('VideoEncoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(VideoEncoder, "VideoEncoder");
VideoEncoder.prototype.__proto__ = EventTarget.prototype;
VideoEncoder.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(VideoEncoder, "isConfigSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isConfigSupported() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder, "VideoEncoder", "isConfigSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "encodeQueueSize", {
  configurable: true,
  enumerable: true,
  get: function encodeQueueSize() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "encodeQueueSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "configure", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "encode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function encode() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "encode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "flush", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function flush() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "flush", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoEncoder.prototype, "ondequeue", {
  configurable: true,
  enumerable: true,
  get: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "ondequeue_get", arguments);
  },
  set: function ondequeue() {
    return bodavm.toolsFunc.dispatch(this, VideoEncoder.prototype, "VideoEncoder", "ondequeue_set", arguments);
  }
});