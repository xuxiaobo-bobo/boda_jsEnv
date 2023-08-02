// WebGLUniformLocation对象

WebGLUniformLocation = function WebGLUniformLocation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLUniformLocation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLUniformLocation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLUniformLocation, "WebGLUniformLocation");