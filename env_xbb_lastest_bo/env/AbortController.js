// AbortController对象

AbortController = function AbortController() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AbortController 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AbortController, "AbortController");
bodavm.toolsFunc.defineProperty(AbortController.prototype, "signal", {
  configurable: true,
  enumerable: true,
  get: function signal() {
    return bodavm.toolsFunc.dispatch(this, AbortController.prototype, "AbortController", "signal_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AbortController.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, AbortController.prototype, "AbortController", "abort", arguments);
  }
});