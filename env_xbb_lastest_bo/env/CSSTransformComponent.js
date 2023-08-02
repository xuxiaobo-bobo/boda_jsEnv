// CSSTransformComponent对象

CSSTransformComponent = function CSSTransformComponent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSTransformComponent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSTransformComponent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSTransformComponent, "CSSTransformComponent");
bodavm.toolsFunc.defineProperty(CSSTransformComponent.prototype, "is2D", {
  configurable: true,
  enumerable: true,
  get: function is2D() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformComponent.prototype, "CSSTransformComponent", "is2D_get", arguments);
  },
  set: function is2D() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformComponent.prototype, "CSSTransformComponent", "is2D_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTransformComponent.prototype, "toMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toMatrix() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformComponent.prototype, "CSSTransformComponent", "toMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CSSTransformComponent.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, CSSTransformComponent.prototype, "CSSTransformComponent", "toString", arguments);
  }
});