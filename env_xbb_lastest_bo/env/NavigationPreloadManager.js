// NavigationPreloadManager对象

NavigationPreloadManager = function NavigationPreloadManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NavigationPreloadManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NavigationPreloadManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NavigationPreloadManager, "NavigationPreloadManager");
bodavm.toolsFunc.defineProperty(NavigationPreloadManager.prototype, "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disable() {
    return bodavm.toolsFunc.dispatch(this, NavigationPreloadManager.prototype, "NavigationPreloadManager", "disable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NavigationPreloadManager.prototype, "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enable() {
    return bodavm.toolsFunc.dispatch(this, NavigationPreloadManager.prototype, "NavigationPreloadManager", "enable", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NavigationPreloadManager.prototype, "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getState() {
    return bodavm.toolsFunc.dispatch(this, NavigationPreloadManager.prototype, "NavigationPreloadManager", "getState", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NavigationPreloadManager.prototype, "setHeaderValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setHeaderValue() {
    return bodavm.toolsFunc.dispatch(this, NavigationPreloadManager.prototype, "NavigationPreloadManager", "setHeaderValue", arguments);
  }
});