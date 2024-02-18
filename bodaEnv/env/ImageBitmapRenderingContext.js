// ImageBitmapRenderingContext对象

bodaEnv.memory.globlProtoObj["ImageBitmapRenderingContext"] = function ImageBitmapRenderingContext() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ImageBitmapRenderingContext 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ImageBitmapRenderingContext"], "ImageBitmapRenderingContext");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageBitmapRenderingContext"].prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: {
    canvas() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageBitmapRenderingContext"].prototype, "ImageBitmapRenderingContext", "canvas_get", arguments);
    }
  }.canvas,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ImageBitmapRenderingContext"].prototype, "transferFromImageBitmap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transferFromImageBitmap() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ImageBitmapRenderingContext"].prototype, "ImageBitmapRenderingContext", "transferFromImageBitmap", arguments);
    }
  }.transferFromImageBitmap
});