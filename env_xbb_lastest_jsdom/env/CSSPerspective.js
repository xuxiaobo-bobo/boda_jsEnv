// CSSPerspective对象

bodavm.memory.globalobj['CSSPerspective'] = function CSSPerspective() {
  console.log_copy('CSSPerspective 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof CSSPerspective)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSPerspective': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['CSSPerspective'], "CSSPerspective");
bodavm.memory.globalobj['CSSPerspective'].prototype.__proto__ = bodavm.memory.globalobj['CSSTransformComponent'].prototype;
bodavm.memory.globalobj['CSSPerspective'].__proto__ = bodavm.memory.globalobj['CSSTransformComponent'];
bodavm.toolsFunc.defineProperty('CSSPerspective', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSPerspective'].prototype, "CSSPerspective", "length_get", arguments);
  },
  set: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['CSSPerspective'].prototype, "CSSPerspective", "length_set", arguments);
  }
}, 'prototype');