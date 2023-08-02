// GPUComputePipeline对象

GPUComputePipeline = function GPUComputePipeline() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUComputePipeline)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUComputePipeline 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUComputePipeline, "GPUComputePipeline");
bodavm.toolsFunc.defineProperty(GPUComputePipeline.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePipeline.prototype, "GPUComputePipeline", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePipeline.prototype, "GPUComputePipeline", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUComputePipeline.prototype, "getBindGroupLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBindGroupLayout() {
    return bodavm.toolsFunc.dispatch(this, GPUComputePipeline.prototype, "GPUComputePipeline", "getBindGroupLayout", arguments);
  }
});