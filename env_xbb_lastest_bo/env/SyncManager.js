// SyncManager对象

SyncManager = function SyncManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SyncManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SyncManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SyncManager, "SyncManager");
bodavm.toolsFunc.defineProperty(SyncManager.prototype, "getTags", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTags() {
    return bodavm.toolsFunc.dispatch(this, SyncManager.prototype, "SyncManager", "getTags", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SyncManager.prototype, "register", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function register() {
    return bodavm.toolsFunc.dispatch(this, SyncManager.prototype, "SyncManager", "register", arguments);
  }
});