// CSSMatrixComponent对象

CSSMatrixComponent = function CSSMatrixComponent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMatrixComponent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMatrixComponent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMatrixComponent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMatrixComponent, "CSSMatrixComponent");
CSSMatrixComponent.prototype.__proto__ = CSSTransformComponent.prototype;
CSSMatrixComponent.__proto__ = CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSMatrixComponent.prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, CSSMatrixComponent.prototype, "CSSMatrixComponent", "matrix_get", arguments);
  },
  set: function matrix() {
    return bodavm.toolsFunc.dispatch(this, CSSMatrixComponent.prototype, "CSSMatrixComponent", "matrix_set", arguments);
  }
});