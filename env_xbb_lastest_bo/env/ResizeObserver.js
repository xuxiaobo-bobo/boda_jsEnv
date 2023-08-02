// ResizeObserver对象

ResizeObserver = function ResizeObserver() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ResizeObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ResizeObserver 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ResizeObserver, "ResizeObserver");
bodavm.toolsFunc.defineProperty(ResizeObserver.prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserver.prototype, "ResizeObserver", "disconnect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ResizeObserver.prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserver.prototype, "ResizeObserver", "observe", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ResizeObserver.prototype, "unobserve", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unobserve() {
    return bodavm.toolsFunc.dispatch(this, ResizeObserver.prototype, "ResizeObserver", "unobserve", arguments);
  }
});