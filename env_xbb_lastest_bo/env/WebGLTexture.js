// WebGLTexture对象

WebGLTexture = function WebGLTexture() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLTexture)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLTexture 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLTexture, "WebGLTexture");