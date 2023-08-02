// PerformanceObserver对象

PerformanceObserver = function PerformanceObserver() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PerformanceObserver': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceObserver 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceObserver, "PerformanceObserver");
bodavm.toolsFunc.defineProperty(PerformanceObserver, "supportedEntryTypes", {
  configurable: true,
  enumerable: true,
  get: function supportedEntryTypes() {
    return bodavm.toolsFunc.dispatch(this, PerformanceObserver, "PerformanceObserver", "supportedEntryTypes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceObserver.prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, PerformanceObserver.prototype, "PerformanceObserver", "disconnect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PerformanceObserver.prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, PerformanceObserver.prototype, "PerformanceObserver", "observe", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PerformanceObserver.prototype, "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takeRecords() {
    return bodavm.toolsFunc.dispatch(this, PerformanceObserver.prototype, "PerformanceObserver", "takeRecords", arguments);
  }
});