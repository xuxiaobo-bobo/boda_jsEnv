// NavigationPreloadManager对象

bodavm.memory.globalobj['NavigationPreloadManager'] = function NavigationPreloadManager() {
  console.log_copy('NavigationPreloadManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof NavigationPreloadManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['NavigationPreloadManager'], "NavigationPreloadManager");
bodavm.toolsFunc.defineProperty('NavigationPreloadManager', "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationPreloadManager'].prototype, "NavigationPreloadManager", "disable", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationPreloadManager', "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationPreloadManager'].prototype, "NavigationPreloadManager", "enable", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationPreloadManager', "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationPreloadManager'].prototype, "NavigationPreloadManager", "getState", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('NavigationPreloadManager', "setHeaderValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setHeaderValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['NavigationPreloadManager'].prototype, "NavigationPreloadManager", "setHeaderValue", arguments);
  }
}, 'prototype');