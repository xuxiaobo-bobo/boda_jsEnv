// GPUCompilationInfo对象

GPUCompilationInfo = function GPUCompilationInfo() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUCompilationInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUCompilationInfo 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUCompilationInfo, "GPUCompilationInfo");
bodavm.toolsFunc.defineProperty(GPUCompilationInfo.prototype, "messages", {
  configurable: true,
  enumerable: true,
  get: function messages() {
    return bodavm.toolsFunc.dispatch(this, GPUCompilationInfo.prototype, "GPUCompilationInfo", "messages_get", arguments);
  },
  set: undefined
});