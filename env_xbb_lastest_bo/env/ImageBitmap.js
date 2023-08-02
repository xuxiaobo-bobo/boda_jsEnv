// ImageBitmap对象

ImageBitmap = function ImageBitmap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ImageBitmap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ImageBitmap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ImageBitmap, "ImageBitmap");
bodavm.toolsFunc.defineProperty(ImageBitmap.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, ImageBitmap.prototype, "ImageBitmap", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageBitmap.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, ImageBitmap.prototype, "ImageBitmap", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageBitmap.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, ImageBitmap.prototype, "ImageBitmap", "close", arguments);
  }
});