// PerformanceObserver对象

bodaEnv.memory.globlProtoObj["PerformanceObserver"] = function PerformanceObserver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceObserver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  bodaEnv.toolsFunc.setObjWeakMapProtoAttr.call(this,'PerformanceObserver',arguments)
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceObserver"], "PerformanceObserver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceObserver"], "supportedEntryTypes", {
  configurable: true,
  enumerable: true,
  get: {
    supportedEntryTypes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"], "PerformanceObserver", "supportedEntryTypes_get", arguments);
    }
  }.supportedEntryTypes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceObserver"].prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceObserver"].prototype, "PerformanceObserver", "disconnect", arguments);
    }
  }.disconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceObserver"].prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    observe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceObserver"].prototype, "PerformanceObserver", "observe", arguments);
    }
  }.observe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceObserver"].prototype, "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    takeRecords() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceObserver"].prototype, "PerformanceObserver", "takeRecords", arguments);
    }
  }.takeRecords
});