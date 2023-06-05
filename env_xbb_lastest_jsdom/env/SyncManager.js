// SyncManager对象

bodavm.memory.globalobj['SyncManager'] = function SyncManager() {
  console.log_copy('SyncManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SyncManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SyncManager'], "SyncManager");
bodavm.toolsFunc.defineProperty('SyncManager', "getTags", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTags() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SyncManager'].prototype, "SyncManager", "getTags", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SyncManager', "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function register() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SyncManager'].prototype, "SyncManager", "register", arguments);
  }
}, 'prototype');