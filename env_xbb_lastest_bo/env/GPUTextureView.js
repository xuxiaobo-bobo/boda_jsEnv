// GPUTextureView对象

GPUTextureView = function GPUTextureView() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUTextureView)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUTextureView 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUTextureView, "GPUTextureView");
bodavm.toolsFunc.defineProperty(GPUTextureView.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUTextureView.prototype, "GPUTextureView", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUTextureView.prototype, "GPUTextureView", "label_set", arguments);
  }
});