// PerformanceLongTaskTiming对象

bodavm.memory.globalobj['PerformanceLongTaskTiming'] = function PerformanceLongTaskTiming() {
  console.log_copy('PerformanceLongTaskTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceLongTaskTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceLongTaskTiming'], "PerformanceLongTaskTiming");
bodavm.memory.globalobj['PerformanceLongTaskTiming'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformanceLongTaskTiming'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('PerformanceLongTaskTiming', "attribution", {
  configurable: true,
  enumerable: true,
  get: function attribution() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceLongTaskTiming'].prototype, "PerformanceLongTaskTiming", "attribution_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceLongTaskTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceLongTaskTiming'].prototype, "PerformanceLongTaskTiming", "toJSON", arguments);
  }
}, 'prototype');