// PerformanceObserverEntryList对象

PerformanceObserverEntryList = function PerformanceObserverEntryList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceObserverEntryList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceObserverEntryList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceObserverEntryList, "PerformanceObserverEntryList");
bodavm.toolsFunc.defineProperty(PerformanceObserverEntryList.prototype, "getEntries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntries() {
    return bodavm.toolsFunc.dispatch(this, PerformanceObserverEntryList.prototype, "PerformanceObserverEntryList", "getEntries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PerformanceObserverEntryList.prototype, "getEntriesByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByName() {
    return bodavm.toolsFunc.dispatch(this, PerformanceObserverEntryList.prototype, "PerformanceObserverEntryList", "getEntriesByName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PerformanceObserverEntryList.prototype, "getEntriesByType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByType() {
    return bodavm.toolsFunc.dispatch(this, PerformanceObserverEntryList.prototype, "PerformanceObserverEntryList", "getEntriesByType", arguments);
  }
});