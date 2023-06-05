// CSSTransformComponent对象

bodavm.memory.globalobj['CSSTransformComponent'] = function CSSTransformComponent() {
  console.log_copy('CSSTransformComponent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSTransformComponent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSTransformComponent'], "CSSTransformComponent");
bodavm.toolsFunc.defineProperty('CSSTransformComponent', "is2D", {
  configurable: true,
  enumerable: true,
  get: function is2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformComponent'].prototype, "CSSTransformComponent", "is2D_get", arguments);
  },
  set: function is2D() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformComponent'].prototype, "CSSTransformComponent", "is2D_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformComponent', "toMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toMatrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformComponent'].prototype, "CSSTransformComponent", "toMatrix", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('CSSTransformComponent', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSTransformComponent'].prototype, "CSSTransformComponent", "toString", arguments);
  }
}, 'prototype');