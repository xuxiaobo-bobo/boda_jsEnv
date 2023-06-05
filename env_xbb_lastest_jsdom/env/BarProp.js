// BarProp对象

bodavm.memory.globalobj['BarProp'] = function BarProp() {
  console.log_copy('BarProp 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BarProp)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BarProp'], "BarProp");
bodavm.toolsFunc.defineProperty('BarProp', "visible", {
  configurable: true,
  enumerable: true,
  get: function visible() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BarProp'].prototype, "BarProp", "visible_get", arguments);
  },
  set: undefined
}, 'prototype');