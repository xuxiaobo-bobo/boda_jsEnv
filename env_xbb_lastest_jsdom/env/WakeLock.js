// WakeLock对象

bodavm.memory.globalobj['WakeLock'] = function WakeLock() {
  console.log_copy('WakeLock 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WakeLock)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WakeLock'], "WakeLock");
bodavm.toolsFunc.defineProperty('WakeLock', "request", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function request() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WakeLock'].prototype, "WakeLock", "request", arguments);
  }
}, 'prototype');