// CSSSkewX对象

bodavm.memory.globalobj['CSSSkewX'] = function CSSSkewX() {
  console.log_copy('CSSSkewX 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSSkewX)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSSkewX': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSSkewX'], "CSSSkewX");
bodavm.memory.globalobj['CSSSkewX'].prototype.__proto__ = bodavm.memory.globalobj['CSSTransformComponent'].prototype;
bodavm.memory.globalobj['CSSSkewX'].__proto__ = bodavm.memory.globalobj['CSSTransformComponent'];
bodavm.toolsFunc.defineProperty('CSSSkewX', "ax", {
  configurable: true,
  enumerable: true,
  get: function ax() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSSkewX'].prototype, "CSSSkewX", "ax_get", arguments);
  },
  set: function ax() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSSkewX'].prototype, "CSSSkewX", "ax_set", arguments);
  }
}, 'prototype');