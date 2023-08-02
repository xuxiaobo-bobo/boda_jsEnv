// LockManager对象

LockManager = function LockManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof LockManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('LockManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(LockManager, "LockManager");
bodavm.toolsFunc.defineProperty(LockManager.prototype, "query", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function query() {
    return bodavm.toolsFunc.dispatch(this, LockManager.prototype, "LockManager", "query", arguments);
  }
});
bodavm.toolsFunc.defineProperty(LockManager.prototype, "request", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function request() {
    return bodavm.toolsFunc.dispatch(this, LockManager.prototype, "LockManager", "request", arguments);
  }
});