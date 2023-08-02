// WebGLRenderbuffer对象

WebGLRenderbuffer = function WebGLRenderbuffer() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLRenderbuffer)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLRenderbuffer 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLRenderbuffer, "WebGLRenderbuffer");