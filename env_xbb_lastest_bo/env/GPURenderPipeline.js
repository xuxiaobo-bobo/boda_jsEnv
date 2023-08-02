// GPURenderPipeline对象

GPURenderPipeline = function GPURenderPipeline() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPURenderPipeline)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPURenderPipeline 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPURenderPipeline, "GPURenderPipeline");
bodavm.toolsFunc.defineProperty(GPURenderPipeline.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPipeline.prototype, "GPURenderPipeline", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPipeline.prototype, "GPURenderPipeline", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPURenderPipeline.prototype, "getBindGroupLayout", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBindGroupLayout() {
    return bodavm.toolsFunc.dispatch(this, GPURenderPipeline.prototype, "GPURenderPipeline", "getBindGroupLayout", arguments);
  }
});