// WebGLSampler对象

bodavm.memory.globalobj['WebGLSampler'] = function WebGLSampler() {
  console.log_copy('WebGLSampler 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGLSampler)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGLSampler'], "WebGLSampler");