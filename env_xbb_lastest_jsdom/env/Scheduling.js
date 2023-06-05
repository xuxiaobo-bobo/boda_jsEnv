// Scheduling对象

bodavm.memory.globalobj['Scheduling'] = function Scheduling() {
  console.log_copy('Scheduling 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Scheduling)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Scheduling'], "Scheduling");
bodavm.toolsFunc.defineProperty('Scheduling', "isInputPending", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isInputPending() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Scheduling'].prototype, "Scheduling", "isInputPending", arguments);
  }
}, 'prototype');