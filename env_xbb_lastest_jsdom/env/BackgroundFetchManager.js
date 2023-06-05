// BackgroundFetchManager对象

bodavm.memory.globalobj['BackgroundFetchManager'] = function BackgroundFetchManager() {
  console.log_copy('BackgroundFetchManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BackgroundFetchManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BackgroundFetchManager'], "BackgroundFetchManager");
bodavm.toolsFunc.defineProperty('BackgroundFetchManager', "fetch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function fetch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchManager'].prototype, "BackgroundFetchManager", "fetch", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchManager', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchManager'].prototype, "BackgroundFetchManager", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('BackgroundFetchManager', "getIds", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getIds() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BackgroundFetchManager'].prototype, "BackgroundFetchManager", "getIds", arguments);
  }
}, 'prototype');