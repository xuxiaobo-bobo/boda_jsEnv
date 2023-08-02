// GPUValidationError对象

GPUValidationError = function GPUValidationError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUValidationError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GPUValidationError': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUValidationError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUValidationError, "GPUValidationError");
GPUValidationError.prototype.__proto__ = GPUError.prototype;
GPUValidationError.__proto__ = GPUError;