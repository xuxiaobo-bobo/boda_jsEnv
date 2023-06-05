// AbortController对象

bodavm.memory.globalobj['AbortController'] = function AbortController() {
  console.log_copy('AbortController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.AbortController();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AbortController'], "AbortController");
bodavm.toolsFunc.defineProperty('AbortController', "signal", {
  configurable: true,
  enumerable: true,
  get: function signal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortController'].prototype, "AbortController", "signal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AbortController', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AbortController'].prototype, "AbortController", "abort", arguments);
  }
}, 'prototype');