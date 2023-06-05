// WebGLShaderPrecisionFormat对象

bodavm.memory.globalobj['WebGLShaderPrecisionFormat'] = function WebGLShaderPrecisionFormat() {
  console.log_copy('WebGLShaderPrecisionFormat 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGLShaderPrecisionFormat)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGLShaderPrecisionFormat'], "WebGLShaderPrecisionFormat");
bodavm.toolsFunc.defineProperty('WebGLShaderPrecisionFormat', "rangeMin", {
  configurable: true,
  enumerable: true,
  get: function rangeMin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGLShaderPrecisionFormat'].prototype, "WebGLShaderPrecisionFormat", "rangeMin_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGLShaderPrecisionFormat', "rangeMax", {
  configurable: true,
  enumerable: true,
  get: function rangeMax() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGLShaderPrecisionFormat'].prototype, "WebGLShaderPrecisionFormat", "rangeMax_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WebGLShaderPrecisionFormat', "precision", {
  configurable: true,
  enumerable: true,
  get: function precision() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WebGLShaderPrecisionFormat'].prototype, "WebGLShaderPrecisionFormat", "precision_get", arguments);
  },
  set: undefined
}, 'prototype');