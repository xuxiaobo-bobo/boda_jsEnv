// WakeLock对象

WakeLock = function WakeLock() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WakeLock)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WakeLock 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WakeLock, "WakeLock");
bodavm.toolsFunc.defineProperty(WakeLock.prototype, "request", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function request() {
    return bodavm.toolsFunc.dispatch(this, WakeLock.prototype, "WakeLock", "request", arguments);
  }
});