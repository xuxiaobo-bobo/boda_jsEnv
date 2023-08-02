// ImageBitmapRenderingContext对象

ImageBitmapRenderingContext = function ImageBitmapRenderingContext() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ImageBitmapRenderingContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ImageBitmapRenderingContext 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ImageBitmapRenderingContext, "ImageBitmapRenderingContext");
bodavm.toolsFunc.defineProperty(ImageBitmapRenderingContext.prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, ImageBitmapRenderingContext.prototype, "ImageBitmapRenderingContext", "canvas_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageBitmapRenderingContext.prototype, "transferFromImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferFromImageBitmap() {
    return bodavm.toolsFunc.dispatch(this, ImageBitmapRenderingContext.prototype, "ImageBitmapRenderingContext", "transferFromImageBitmap", arguments);
  }
});