// GPUError对象

GPUError = function GPUError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUError, "GPUError");
bodavm.toolsFunc.defineProperty(GPUError.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, GPUError.prototype, "GPUError", "message_get", arguments);
  },
  set: undefined
});