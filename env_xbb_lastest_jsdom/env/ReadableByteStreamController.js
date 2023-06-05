// ReadableByteStreamController对象

bodavm.memory.globalobj['ReadableByteStreamController'] = function ReadableByteStreamController() {
  console.log_copy('ReadableByteStreamController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ReadableByteStreamController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ReadableByteStreamController'], "ReadableByteStreamController");
bodavm.toolsFunc.defineProperty('ReadableByteStreamController', "byobRequest", {
  configurable: true,
  enumerable: true,
  get: function byobRequest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableByteStreamController'].prototype, "ReadableByteStreamController", "byobRequest_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableByteStreamController', "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableByteStreamController'].prototype, "ReadableByteStreamController", "desiredSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableByteStreamController', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableByteStreamController'].prototype, "ReadableByteStreamController", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableByteStreamController', "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enqueue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableByteStreamController'].prototype, "ReadableByteStreamController", "enqueue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReadableByteStreamController', "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReadableByteStreamController'].prototype, "ReadableByteStreamController", "error", arguments);
  }
}, 'prototype');