// PeriodicSyncManager对象

bodavm.memory.globalobj['PeriodicSyncManager'] = function PeriodicSyncManager() {
  console.log_copy('PeriodicSyncManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PeriodicSyncManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PeriodicSyncManager'], "PeriodicSyncManager");
bodavm.toolsFunc.defineProperty('PeriodicSyncManager', "getTags", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTags() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PeriodicSyncManager'].prototype, "PeriodicSyncManager", "getTags", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PeriodicSyncManager', "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function register() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PeriodicSyncManager'].prototype, "PeriodicSyncManager", "register", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PeriodicSyncManager', "unregister", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unregister() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PeriodicSyncManager'].prototype, "PeriodicSyncManager", "unregister", arguments);
  }
}, 'prototype');