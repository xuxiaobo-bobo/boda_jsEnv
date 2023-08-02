// TransformStreamDefaultController对象

TransformStreamDefaultController = function TransformStreamDefaultController() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TransformStreamDefaultController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TransformStreamDefaultController 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TransformStreamDefaultController, "TransformStreamDefaultController");
bodavm.toolsFunc.defineProperty(TransformStreamDefaultController.prototype, "desiredSize", {
  configurable: true,
  enumerable: true,
  get: function desiredSize() {
    return bodavm.toolsFunc.dispatch(this, TransformStreamDefaultController.prototype, "TransformStreamDefaultController", "desiredSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(TransformStreamDefaultController.prototype, "enqueue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enqueue() {
    return bodavm.toolsFunc.dispatch(this, TransformStreamDefaultController.prototype, "TransformStreamDefaultController", "enqueue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TransformStreamDefaultController.prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, TransformStreamDefaultController.prototype, "TransformStreamDefaultController", "error", arguments);
  }
});
bodavm.toolsFunc.defineProperty(TransformStreamDefaultController.prototype, "terminate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function terminate() {
    return bodavm.toolsFunc.dispatch(this, TransformStreamDefaultController.prototype, "TransformStreamDefaultController", "terminate", arguments);
  }
});