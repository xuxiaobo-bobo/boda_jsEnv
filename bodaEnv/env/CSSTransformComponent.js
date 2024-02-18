// CSSTransformComponent对象

bodaEnv.memory.globlProtoObj["CSSTransformComponent"] = function CSSTransformComponent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSTransformComponent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSTransformComponent"], "CSSTransformComponent");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype, "is2D", {
  configurable: true,
  enumerable: true,
  get: {
    is2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype, "CSSTransformComponent", "is2D_get", arguments);
    }
  }.is2D,
  set: {
    is2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype, "CSSTransformComponent", "is2D_set", arguments);
    }
  }.is2D
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype, "toMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype, "CSSTransformComponent", "toMatrix", arguments);
    }
  }.toMatrix
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformComponent"].prototype, "CSSTransformComponent", "toString", arguments);
    }
  }.toString
});