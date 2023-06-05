// WebGLUniformLocation对象

bodavm.memory.globalobj['WebGLUniformLocation'] = function WebGLUniformLocation() {
  console.log_copy('WebGLUniformLocation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGLUniformLocation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGLUniformLocation'], "WebGLUniformLocation");