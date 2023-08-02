// ReadableByteStreamController对象

ReadableByteStreamController = function ReadableByteStreamController() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ReadableByteStreamController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ReadableByteStreamController 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ReadableByteStreamController, "ReadableByteStreamController");
bodavm.toolsFunc.defineProperty(ReadableByteStreamController.prototype, "byobRequest", {
  configurable: true,
  enumerable: true,
  get: function byobRequest() {
    return bodavm.toolsFunc.dispatch(this, ReadableByteStreamController.prototype, "ReadableByteStreamController", "byobRequest_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ReadableByteStreamController.prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, ReadableByteStreamController.prototype, "ReadableByteStreamController", "desiredSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ReadableByteStreamController.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, ReadableByteStreamController.prototype, "ReadableByteStreamController", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableByteStreamController.prototype, "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enqueue() {
    return bodavm.toolsFunc.dispatch(this, ReadableByteStreamController.prototype, "ReadableByteStreamController", "enqueue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableByteStreamController.prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, ReadableByteStreamController.prototype, "ReadableByteStreamController", "error", arguments);
  }
});