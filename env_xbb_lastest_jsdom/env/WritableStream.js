// WritableStream对象

bodavm.memory.globalobj['WritableStream'] = function WritableStream() {
  console.log_copy('WritableStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.WritableStream();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WritableStream'], "WritableStream");
bodavm.toolsFunc.defineProperty('WritableStream', "locked", {
  configurable: true,
  enumerable: true,
  get: function locked() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStream'].prototype, "WritableStream", "locked_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStream', "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStream'].prototype, "WritableStream", "abort", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStream', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStream'].prototype, "WritableStream", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WritableStream', "getWriter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getWriter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WritableStream'].prototype, "WritableStream", "getWriter", arguments);
  }
}, 'prototype');