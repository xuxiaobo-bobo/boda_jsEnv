// WebGLShaderPrecisionFormat对象

WebGLShaderPrecisionFormat = function WebGLShaderPrecisionFormat() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WebGLShaderPrecisionFormat)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WebGLShaderPrecisionFormat 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WebGLShaderPrecisionFormat, "WebGLShaderPrecisionFormat");
bodavm.toolsFunc.defineProperty(WebGLShaderPrecisionFormat.prototype, "rangeMin", {
  configurable: true,
  enumerable: true,
  get: function rangeMin() {
    return bodavm.toolsFunc.dispatch(this, WebGLShaderPrecisionFormat.prototype, "WebGLShaderPrecisionFormat", "rangeMin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGLShaderPrecisionFormat.prototype, "rangeMax", {
  configurable: true,
  enumerable: true,
  get: function rangeMax() {
    return bodavm.toolsFunc.dispatch(this, WebGLShaderPrecisionFormat.prototype, "WebGLShaderPrecisionFormat", "rangeMax_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WebGLShaderPrecisionFormat.prototype, "precision", {
  configurable: true,
  enumerable: true,
  get: function precision() {
    return bodavm.toolsFunc.dispatch(this, WebGLShaderPrecisionFormat.prototype, "WebGLShaderPrecisionFormat", "precision_get", arguments);
  },
  set: undefined
});