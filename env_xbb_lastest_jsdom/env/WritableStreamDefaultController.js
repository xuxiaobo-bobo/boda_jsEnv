// WritableStreamDefaultController对象

bodavm.memory.globalobj['WritableStreamDefaultController'] = function WritableStreamDefaultController() {
  console.log_copy('WritableStreamDefaultController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WritableStreamDefaultController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WritableStreamDefaultController'], "WritableStreamDefaultController");
bodavm.toolsFunc.defineProperty('WritableStreamDefaultController', "signal", {
  configurable: true,
  enumerable: true,
  get: function signal() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultController'].prototype, "WritableStreamDefaultController", "signal_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStreamDefaultController', "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStreamDefaultController'].prototype, "WritableStreamDefaultController", "error", arguments);
  }
}, 'prototype');