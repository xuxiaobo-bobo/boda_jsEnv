// XRAnchor对象

bodavm.memory.globalobj['XRAnchor'] = function XRAnchor() {
  console.log_copy('XRAnchor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRAnchor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRAnchor'], "XRAnchor");
bodavm.toolsFunc.defineProperty('XRAnchor', "anchorSpace", {
  configurable: true,
  enumerable: true,
  get: function anchorSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchor'].prototype, "XRAnchor", "anchorSpace_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRAnchor', "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRAnchor'].prototype, "XRAnchor", "delete", arguments);
  }
}, 'prototype');