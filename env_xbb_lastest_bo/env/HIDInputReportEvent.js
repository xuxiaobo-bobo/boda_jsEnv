// HIDInputReportEvent对象

HIDInputReportEvent = function HIDInputReportEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HIDInputReportEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HIDInputReportEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HIDInputReportEvent, "HIDInputReportEvent");
HIDInputReportEvent.prototype.__proto__ = Event.prototype;
HIDInputReportEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(HIDInputReportEvent.prototype, "device", {
  configurable: true,
  enumerable: true,
  get: function device() {
    return bodavm.toolsFunc.dispatch(this, HIDInputReportEvent.prototype, "HIDInputReportEvent", "device_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HIDInputReportEvent.prototype, "reportId", {
  configurable: true,
  enumerable: true,
  get: function reportId() {
    return bodavm.toolsFunc.dispatch(this, HIDInputReportEvent.prototype, "HIDInputReportEvent", "reportId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HIDInputReportEvent.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, HIDInputReportEvent.prototype, "HIDInputReportEvent", "data_get", arguments);
  },
  set: undefined
});