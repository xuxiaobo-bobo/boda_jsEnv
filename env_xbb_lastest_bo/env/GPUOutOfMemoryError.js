// GPUOutOfMemoryError对象

GPUOutOfMemoryError = function GPUOutOfMemoryError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUOutOfMemoryError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'GPUOutOfMemoryError': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUOutOfMemoryError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUOutOfMemoryError, "GPUOutOfMemoryError");
GPUOutOfMemoryError.prototype.__proto__ = GPUError.prototype;
GPUOutOfMemoryError.__proto__ = GPUError;