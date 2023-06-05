// TransformStreamDefaultController对象

bodavm.memory.globalobj['TransformStreamDefaultController'] = function TransformStreamDefaultController() {
  console.log_copy('TransformStreamDefaultController 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TransformStreamDefaultController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TransformStreamDefaultController'], "TransformStreamDefaultController");
bodavm.toolsFunc.defineProperty('TransformStreamDefaultController', "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransformStreamDefaultController'].prototype, "TransformStreamDefaultController", "desiredSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TransformStreamDefaultController', "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enqueue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransformStreamDefaultController'].prototype, "TransformStreamDefaultController", "enqueue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TransformStreamDefaultController', "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransformStreamDefaultController'].prototype, "TransformStreamDefaultController", "error", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TransformStreamDefaultController', "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function terminate() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TransformStreamDefaultController'].prototype, "TransformStreamDefaultController", "terminate", arguments);
  }
}, 'prototype');