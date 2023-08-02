// GPUCanvasContext对象

GPUCanvasContext = function GPUCanvasContext() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUCanvasContext)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUCanvasContext 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUCanvasContext, "GPUCanvasContext");
bodavm.toolsFunc.defineProperty(GPUCanvasContext.prototype, "canvas", {
  configurable: true,
  enumerable: true,
  get: function canvas() {
    return bodavm.toolsFunc.dispatch(this, GPUCanvasContext.prototype, "GPUCanvasContext", "canvas_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUCanvasContext.prototype, "configure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function configure() {
    return bodavm.toolsFunc.dispatch(this, GPUCanvasContext.prototype, "GPUCanvasContext", "configure", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCanvasContext.prototype, "getCurrentTexture", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCurrentTexture() {
    return bodavm.toolsFunc.dispatch(this, GPUCanvasContext.prototype, "GPUCanvasContext", "getCurrentTexture", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUCanvasContext.prototype, "unconfigure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unconfigure() {
    return bodavm.toolsFunc.dispatch(this, GPUCanvasContext.prototype, "GPUCanvasContext", "unconfigure", arguments);
  }
});