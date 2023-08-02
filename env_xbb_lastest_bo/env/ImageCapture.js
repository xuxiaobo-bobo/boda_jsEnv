// ImageCapture对象

ImageCapture = function ImageCapture() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ImageCapture)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageCapture': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ImageCapture 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ImageCapture, "ImageCapture");
bodavm.toolsFunc.defineProperty(ImageCapture.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "track_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageCapture.prototype, "getPhotoCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPhotoCapabilities() {
    return bodavm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "getPhotoCapabilities", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ImageCapture.prototype, "getPhotoSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPhotoSettings() {
    return bodavm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "getPhotoSettings", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ImageCapture.prototype, "grabFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function grabFrame() {
    return bodavm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "grabFrame", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ImageCapture.prototype, "takePhoto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takePhoto() {
    return bodavm.toolsFunc.dispatch(this, ImageCapture.prototype, "ImageCapture", "takePhoto", arguments);
  }
});