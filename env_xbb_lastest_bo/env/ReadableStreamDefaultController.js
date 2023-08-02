// ReadableStreamDefaultController对象

ReadableStreamDefaultController = function ReadableStreamDefaultController() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ReadableStreamDefaultController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ReadableStreamDefaultController 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ReadableStreamDefaultController, "ReadableStreamDefaultController");
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultController.prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultController.prototype, "ReadableStreamDefaultController", "desiredSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultController.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultController.prototype, "ReadableStreamDefaultController", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultController.prototype, "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enqueue() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultController.prototype, "ReadableStreamDefaultController", "enqueue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStreamDefaultController.prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamDefaultController.prototype, "ReadableStreamDefaultController", "error", arguments);
  }
});