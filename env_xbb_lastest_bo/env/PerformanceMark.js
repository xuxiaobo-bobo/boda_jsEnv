// PerformanceMark对象

PerformanceMark = function PerformanceMark() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceMark)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PerformanceMark': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceMark 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceMark, "PerformanceMark");
PerformanceMark.prototype.__proto__ = PerformanceEntry.prototype;
PerformanceMark.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(PerformanceMark.prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: function detail() {
    return bodavm.toolsFunc.dispatch(this, PerformanceMark.prototype, "PerformanceMark", "detail_get", arguments);
  },
  set: undefined
});