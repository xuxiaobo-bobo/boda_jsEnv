// WebGLQuery对象

WebGLQuery = function WebGLQuery() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLQuery)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLQuery 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLQuery, "WebGLQuery");