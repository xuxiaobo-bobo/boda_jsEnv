// ReadableStreamBYOBReader对象

bodavm.memory.globalobj['ReadableStreamBYOBReader'] = function ReadableStreamBYOBReader() {
  console.log_copy('ReadableStreamBYOBReader 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ReadableStreamBYOBReader)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ReadableStreamBYOBReader': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ReadableStreamBYOBReader'], "ReadableStreamBYOBReader");
bodavm.toolsFunc.defineProperty('ReadableStreamBYOBReader', "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function read() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamBYOBReader'].prototype, "ReadableStreamBYOBReader", "read", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamBYOBReader', "releaseLock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseLock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamBYOBReader'].prototype, "ReadableStreamBYOBReader", "releaseLock", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamBYOBReader', "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamBYOBReader'].prototype, "ReadableStreamBYOBReader", "closed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableStreamBYOBReader', "cancel", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancel() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableStreamBYOBReader'].prototype, "ReadableStreamBYOBReader", "cancel", arguments);
  }
}, 'prototype');