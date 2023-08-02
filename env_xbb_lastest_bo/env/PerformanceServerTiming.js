// PerformanceServerTiming对象

PerformanceServerTiming = function PerformanceServerTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceServerTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceServerTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceServerTiming, "PerformanceServerTiming");
bodavm.toolsFunc.defineProperty(PerformanceServerTiming.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, PerformanceServerTiming.prototype, "PerformanceServerTiming", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceServerTiming.prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, PerformanceServerTiming.prototype, "PerformanceServerTiming", "duration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceServerTiming.prototype, "description", {
  configurable: true,
  enumerable: true,
  get: function description() {
    return bodavm.toolsFunc.dispatch(this, PerformanceServerTiming.prototype, "PerformanceServerTiming", "description_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceServerTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceServerTiming.prototype, "PerformanceServerTiming", "toJSON", arguments);
  }
});