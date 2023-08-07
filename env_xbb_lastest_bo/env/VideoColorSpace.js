// VideoColorSpace对象

VideoColorSpace = function VideoColorSpace() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('VideoColorSpace 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(VideoColorSpace, "VideoColorSpace");
bodavm.toolsFunc.defineProperty(VideoColorSpace.prototype, "primaries", {
  configurable: true,
  enumerable: true,
  get: function primaries() {
    return bodavm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "primaries_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoColorSpace.prototype, "transfer", {
  configurable: true,
  enumerable: true,
  get: function transfer() {
    return bodavm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "transfer_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoColorSpace.prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "matrix_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoColorSpace.prototype, "fullRange", {
  configurable: true,
  enumerable: true,
  get: function fullRange() {
    return bodavm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "fullRange_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(VideoColorSpace.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, VideoColorSpace.prototype, "VideoColorSpace", "toJSON", arguments);
  }
});