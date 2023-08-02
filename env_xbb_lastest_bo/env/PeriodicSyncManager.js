// PeriodicSyncManager对象

PeriodicSyncManager = function PeriodicSyncManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PeriodicSyncManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PeriodicSyncManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PeriodicSyncManager, "PeriodicSyncManager");
bodavm.toolsFunc.defineProperty(PeriodicSyncManager.prototype, "getTags", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTags() {
    return bodavm.toolsFunc.dispatch(this, PeriodicSyncManager.prototype, "PeriodicSyncManager", "getTags", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PeriodicSyncManager.prototype, "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function register() {
    return bodavm.toolsFunc.dispatch(this, PeriodicSyncManager.prototype, "PeriodicSyncManager", "register", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PeriodicSyncManager.prototype, "unregister", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unregister() {
    return bodavm.toolsFunc.dispatch(this, PeriodicSyncManager.prototype, "PeriodicSyncManager", "unregister", arguments);
  }
});