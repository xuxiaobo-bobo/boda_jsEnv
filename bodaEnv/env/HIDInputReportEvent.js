// HIDInputReportEvent对象

bodaEnv.memory.globlProtoObj["HIDInputReportEvent"] = function HIDInputReportEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HIDInputReportEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HIDInputReportEvent"], "HIDInputReportEvent");
bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].prototype, "device", {
  configurable: true,
  enumerable: true,
  get: {
    device() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].prototype, "HIDInputReportEvent", "device_get", arguments);
    }
  }.device,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].prototype, "reportId", {
  configurable: true,
  enumerable: true,
  get: {
    reportId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].prototype, "HIDInputReportEvent", "reportId_get", arguments);
    }
  }.reportId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDInputReportEvent"].prototype, "HIDInputReportEvent", "data_get", arguments);
    }
  }.data,
  set: undefined
});