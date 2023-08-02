// VideoFrame对象

VideoFrame = function VideoFrame() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof VideoFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VideoFrame': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('VideoFrame 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(VideoFrame, "VideoFrame");
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "format", {
  configurable: true,
  enumerable: true,
  get: function format() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "format_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "duration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "codedWidth", {
  configurable: true,
  enumerable: true,
  get: function codedWidth() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "codedWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "codedHeight", {
  configurable: true,
  enumerable: true,
  get: function codedHeight() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "codedHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "codedRect", {
  configurable: true,
  enumerable: true,
  get: function codedRect() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "codedRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "visibleRect", {
  configurable: true,
  enumerable: true,
  get: function visibleRect() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "visibleRect_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "displayWidth", {
  configurable: true,
  enumerable: true,
  get: function displayWidth() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "displayWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "displayHeight", {
  configurable: true,
  enumerable: true,
  get: function displayHeight() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "displayHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "colorSpace", {
  configurable: true,
  enumerable: true,
  get: function colorSpace() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "colorSpace_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "allocationSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allocationSize() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "allocationSize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "clone", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(VideoFrame.prototype, "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, VideoFrame.prototype, "VideoFrame", "copyTo", arguments);
  }
});