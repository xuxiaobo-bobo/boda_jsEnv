// GPUInternalError对象

GPUInternalError = function GPUInternalError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUInternalError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GPUInternalError': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUInternalError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUInternalError, "GPUInternalError");
GPUInternalError.prototype.__proto__ = GPUError.prototype;
GPUInternalError.__proto__ = GPUError;