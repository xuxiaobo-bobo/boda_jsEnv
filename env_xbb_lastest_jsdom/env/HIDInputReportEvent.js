// HIDInputReportEvent对象

bodavm.memory.globalobj['HIDInputReportEvent'] = function HIDInputReportEvent() {
  console.log_copy('HIDInputReportEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HIDInputReportEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HIDInputReportEvent'], "HIDInputReportEvent");
bodavm.memory.globalobj['HIDInputReportEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['HIDInputReportEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('HIDInputReportEvent', "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDInputReportEvent'].prototype, "HIDInputReportEvent", "device_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDInputReportEvent', "reportId", {
  configurable: true,
  enumerable: true,
  get: function reportId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDInputReportEvent'].prototype, "HIDInputReportEvent", "reportId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HIDInputReportEvent', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HIDInputReportEvent'].prototype, "HIDInputReportEvent", "data_get", arguments);
  },
  set: undefined
}, 'prototype');