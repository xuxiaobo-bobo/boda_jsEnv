// PerformanceMeasure对象

PerformanceMeasure = function PerformanceMeasure() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceMeasure)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceMeasure 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceMeasure, "PerformanceMeasure");
PerformanceMeasure.prototype.__proto__ = PerformanceEntry.prototype;
PerformanceMeasure.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(PerformanceMeasure.prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: function detail() {
    return bodavm.toolsFunc.dispatch(this, PerformanceMeasure.prototype, "PerformanceMeasure", "detail_get", arguments);
  },
  set: undefined
});