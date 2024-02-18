// PerformanceObserverEntryList对象

bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"] = function PerformanceObserverEntryList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceObserverEntryList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"], "PerformanceObserverEntryList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"].prototype, "getEntries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEntries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"].prototype, "PerformanceObserverEntryList", "getEntries", arguments);
    }
  }.getEntries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"].prototype, "getEntriesByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEntriesByName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"].prototype, "PerformanceObserverEntryList", "getEntriesByName", arguments);
    }
  }.getEntriesByName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"].prototype, "getEntriesByType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEntriesByType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceObserverEntryList"].prototype, "PerformanceObserverEntryList", "getEntriesByType", arguments);
    }
  }.getEntriesByType
});