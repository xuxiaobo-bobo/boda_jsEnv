// WebGLActiveInfo对象

WebGLActiveInfo = function WebGLActiveInfo() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLActiveInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLActiveInfo 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLActiveInfo, "WebGLActiveInfo");
bodavm.toolsFunc.defineProperty(WebGLActiveInfo.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, WebGLActiveInfo.prototype, "WebGLActiveInfo", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGLActiveInfo.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, WebGLActiveInfo.prototype, "WebGLActiveInfo", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGLActiveInfo.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, WebGLActiveInfo.prototype, "WebGLActiveInfo", "name_get", arguments);
  },
  set: undefined
});