// PerformanceServerTiming对象

bodavm.memory.globalobj['PerformanceServerTiming'] = function PerformanceServerTiming() {
  console.log_copy('PerformanceServerTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceServerTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceServerTiming'], "PerformanceServerTiming");
bodavm.toolsFunc.defineProperty('PerformanceServerTiming', "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceServerTiming'].prototype, "PerformanceServerTiming", "name_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceServerTiming', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceServerTiming'].prototype, "PerformanceServerTiming", "duration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceServerTiming', "description", {
  configurable: true,
  enumerable: true,
  get: function description() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceServerTiming'].prototype, "PerformanceServerTiming", "description_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceServerTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceServerTiming'].prototype, "PerformanceServerTiming", "toJSON", arguments);
  }
}, 'prototype');