// BackgroundFetchManager对象

BackgroundFetchManager = function BackgroundFetchManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BackgroundFetchManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BackgroundFetchManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BackgroundFetchManager, "BackgroundFetchManager");
bodavm.toolsFunc.defineProperty(BackgroundFetchManager.prototype, "fetch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fetch() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchManager.prototype, "BackgroundFetchManager", "fetch", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BackgroundFetchManager.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchManager.prototype, "BackgroundFetchManager", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(BackgroundFetchManager.prototype, "getIds", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getIds() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchManager.prototype, "BackgroundFetchManager", "getIds", arguments);
  }
});