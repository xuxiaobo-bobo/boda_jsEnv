// PerformanceMeasure对象

bodavm.memory.globalobj['PerformanceMeasure'] = function PerformanceMeasure() {
  console.log_copy('PerformanceMeasure 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceMeasure)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceMeasure'], "PerformanceMeasure");
bodavm.memory.globalobj['PerformanceMeasure'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformanceMeasure'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('PerformanceMeasure', "detail", {
  configurable: true,
  enumerable: true,
  get: function detail() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceMeasure'].prototype, "PerformanceMeasure", "detail_get", arguments);
  },
  set: undefined
}, 'prototype');