// PerformancePaintTiming对象

bodavm.memory.globalobj['PerformancePaintTiming'] = function PerformancePaintTiming() {
  console.log_copy('PerformancePaintTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformancePaintTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformancePaintTiming'], "PerformancePaintTiming");
bodavm.memory.globalobj['PerformancePaintTiming'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformancePaintTiming'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];