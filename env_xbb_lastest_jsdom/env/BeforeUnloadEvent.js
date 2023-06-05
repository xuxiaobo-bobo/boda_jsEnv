// BeforeUnloadEvent对象

bodavm.memory.globalobj['BeforeUnloadEvent'] = function BeforeUnloadEvent() {
  console.log_copy('BeforeUnloadEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BeforeUnloadEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BeforeUnloadEvent'], "BeforeUnloadEvent");
bodavm.memory.globalobj['BeforeUnloadEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['BeforeUnloadEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('BeforeUnloadEvent', "returnValue", {
  configurable: true,
  enumerable: true,
  get: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BeforeUnloadEvent'].prototype, "BeforeUnloadEvent", "returnValue_get", arguments);
  },
  set: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BeforeUnloadEvent'].prototype, "BeforeUnloadEvent", "returnValue_set", arguments);
  }
}, 'prototype');