// ImageDecoder对象

ImageDecoder = function ImageDecoder() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ImageDecoder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageDecoder': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ImageDecoder 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ImageDecoder, "ImageDecoder");
bodavm.toolsFunc.defineProperty(ImageDecoder, "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTypeSupported() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder, "ImageDecoder", "isTypeSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ImageDecoder.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder.prototype, "ImageDecoder", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageDecoder.prototype, "complete", {
  configurable: true,
  enumerable: true,
  get: function complete() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder.prototype, "ImageDecoder", "complete_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageDecoder.prototype, "completed", {
  configurable: true,
  enumerable: true,
  get: function completed() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder.prototype, "ImageDecoder", "completed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageDecoder.prototype, "tracks", {
  configurable: true,
  enumerable: true,
  get: function tracks() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder.prototype, "ImageDecoder", "tracks_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageDecoder.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder.prototype, "ImageDecoder", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ImageDecoder.prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder.prototype, "ImageDecoder", "decode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ImageDecoder.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, ImageDecoder.prototype, "ImageDecoder", "reset", arguments);
  }
});