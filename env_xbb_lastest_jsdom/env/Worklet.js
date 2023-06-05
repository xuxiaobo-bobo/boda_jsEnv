// Worklet对象

bodavm.memory.globalobj['Worklet'] = function Worklet() {
  console.log_copy('Worklet 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Worklet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Worklet'], "Worklet");
bodavm.toolsFunc.defineProperty('Worklet', "addModule", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addModule() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Worklet'].prototype, "Worklet", "addModule", arguments);
  }
}, 'prototype');