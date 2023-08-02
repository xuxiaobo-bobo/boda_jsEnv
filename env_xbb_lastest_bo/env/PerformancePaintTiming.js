// PerformancePaintTiming对象

PerformancePaintTiming = function PerformancePaintTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformancePaintTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformancePaintTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformancePaintTiming, "PerformancePaintTiming");
PerformancePaintTiming.prototype.__proto__ = PerformanceEntry.prototype;
PerformancePaintTiming.__proto__ = PerformanceEntry;