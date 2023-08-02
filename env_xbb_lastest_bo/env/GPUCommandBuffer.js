// GPUCommandBuffer对象

GPUCommandBuffer = function GPUCommandBuffer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUCommandBuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUCommandBuffer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUCommandBuffer, "GPUCommandBuffer");
bodavm.toolsFunc.defineProperty(GPUCommandBuffer.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandBuffer.prototype, "GPUCommandBuffer", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUCommandBuffer.prototype, "GPUCommandBuffer", "label_set", arguments);
  }
});