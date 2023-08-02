// WebGLSampler对象

WebGLSampler = function WebGLSampler() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLSampler)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLSampler 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLSampler, "WebGLSampler");