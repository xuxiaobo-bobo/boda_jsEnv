// CSSMatrixComponent对象

bodavm.memory.globalobj['CSSMatrixComponent'] = function CSSMatrixComponent() {
  console.log_copy('CSSMatrixComponent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSMatrixComponent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMatrixComponent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSMatrixComponent'], "CSSMatrixComponent");
bodavm.memory.globalobj['CSSMatrixComponent'].prototype.__proto__ = bodavm.memory.globalobj['CSSTransformComponent'].prototype;
bodavm.memory.globalobj['CSSMatrixComponent'].__proto__ = bodavm.memory.globalobj['CSSTransformComponent'];
bodavm.toolsFunc.defineProperty('CSSMatrixComponent', "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMatrixComponent'].prototype, "CSSMatrixComponent", "matrix_get", arguments);
  },
  set: function matrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSMatrixComponent'].prototype, "CSSMatrixComponent", "matrix_set", arguments);
  }
}, 'prototype');