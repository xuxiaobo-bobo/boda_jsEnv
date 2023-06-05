// PerformanceEventTiming对象

bodavm.memory.globalobj['PerformanceEventTiming'] = function PerformanceEventTiming() {
  console.log_copy('PerformanceEventTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceEventTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceEventTiming'], "PerformanceEventTiming");
bodavm.memory.globalobj['PerformanceEventTiming'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformanceEventTiming'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('PerformanceEventTiming', "processingStart", {
  configurable: true,
  enumerable: true,
  get: function processingStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEventTiming'].prototype, "PerformanceEventTiming", "processingStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEventTiming', "processingEnd", {
  configurable: true,
  enumerable: true,
  get: function processingEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEventTiming'].prototype, "PerformanceEventTiming", "processingEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEventTiming', "cancelable", {
  configurable: true,
  enumerable: true,
  get: function cancelable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEventTiming'].prototype, "PerformanceEventTiming", "cancelable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEventTiming', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEventTiming'].prototype, "PerformanceEventTiming", "target_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEventTiming', "interactionId", {
  configurable: true,
  enumerable: true,
  get: function interactionId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEventTiming'].prototype, "PerformanceEventTiming", "interactionId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceEventTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceEventTiming'].prototype, "PerformanceEventTiming", "toJSON", arguments);
  }
}, 'prototype');