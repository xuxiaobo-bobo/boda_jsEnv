// PerformanceLongTaskTiming对象

PerformanceLongTaskTiming = function PerformanceLongTaskTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceLongTaskTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceLongTaskTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceLongTaskTiming, "PerformanceLongTaskTiming");
PerformanceLongTaskTiming.prototype.__proto__ = PerformanceEntry.prototype;
PerformanceLongTaskTiming.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(PerformanceLongTaskTiming.prototype, "attribution", {
  configurable: true,
  enumerable: true,
  get: function attribution() {
    return bodavm.toolsFunc.dispatch(this, PerformanceLongTaskTiming.prototype, "PerformanceLongTaskTiming", "attribution_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceLongTaskTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceLongTaskTiming.prototype, "PerformanceLongTaskTiming", "toJSON", arguments);
  }
});