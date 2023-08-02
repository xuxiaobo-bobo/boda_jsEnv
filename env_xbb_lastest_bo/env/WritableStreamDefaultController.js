// WritableStreamDefaultController对象

WritableStreamDefaultController = function WritableStreamDefaultController() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof WritableStreamDefaultController)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('WritableStreamDefaultController 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(WritableStreamDefaultController, "WritableStreamDefaultController");
bodavm.toolsFunc.defineProperty(WritableStreamDefaultController.prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: function signal() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultController.prototype, "WritableStreamDefaultController", "signal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(WritableStreamDefaultController.prototype, "error", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function error() {
    return bodavm.toolsFunc.dispatch(this, WritableStreamDefaultController.prototype, "WritableStreamDefaultController", "error", arguments);
  }
});