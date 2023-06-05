// WebGLVertexArrayObject对象

bodavm.memory.globalobj['WebGLVertexArrayObject'] = function WebGLVertexArrayObject() {
  console.log_copy('WebGLVertexArrayObject 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WebGLVertexArrayObject)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WebGLVertexArrayObject'], "WebGLVertexArrayObject");