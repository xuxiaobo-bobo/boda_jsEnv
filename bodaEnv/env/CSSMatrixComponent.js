// CSSMatrixComponent对象

bodaEnv.memory.globlProtoObj["CSSMatrixComponent"] = function CSSMatrixComponent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMatrixComponent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMatrixComponent"], "CSSMatrixComponent");
bodaEnv.memory.globlProtoObj["CSSMatrixComponent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype;
bodaEnv.memory.globlProtoObj["CSSMatrixComponent"].__proto__ = bodaEnv.memory.globlProtoObj["CSSTransformComponent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMatrixComponent"].prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: {
    matrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMatrixComponent"].prototype, "CSSMatrixComponent", "matrix_get", arguments);
    }
  }.matrix,
  set: {
    matrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMatrixComponent"].prototype, "CSSMatrixComponent", "matrix_set", arguments);
    }
  }.matrix
});