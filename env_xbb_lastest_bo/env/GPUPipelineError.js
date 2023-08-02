// GPUPipelineError对象

GPUPipelineError = function GPUPipelineError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUPipelineError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GPUPipelineError': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUPipelineError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUPipelineError, "GPUPipelineError");
GPUPipelineError.prototype.__proto__ = DOMException.prototype;
GPUPipelineError.__proto__ = DOMException;
bodavm.toolsFunc.defineProperty(GPUPipelineError.prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: function reason() {
    return bodavm.toolsFunc.dispatch(this, GPUPipelineError.prototype, "GPUPipelineError", "reason_get", arguments);
  },
  set: undefined
});