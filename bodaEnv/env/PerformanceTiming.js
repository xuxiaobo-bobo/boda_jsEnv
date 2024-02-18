// PerformanceTiming对象

bodaEnv.memory.globlProtoObj["PerformanceTiming"] = function PerformanceTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceTiming"], "PerformanceTiming");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "navigationStart", {
  configurable: true,
  enumerable: true,
  get: {
    navigationStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "navigationStart_get", arguments);
    }
  }.navigationStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "unloadEventStart", {
  configurable: true,
  enumerable: true,
  get: {
    unloadEventStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "unloadEventStart_get", arguments);
    }
  }.unloadEventStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "unloadEventEnd", {
  configurable: true,
  enumerable: true,
  get: {
    unloadEventEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "unloadEventEnd_get", arguments);
    }
  }.unloadEventEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "redirectStart", {
  configurable: true,
  enumerable: true,
  get: {
    redirectStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "redirectStart_get", arguments);
    }
  }.redirectStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "redirectEnd", {
  configurable: true,
  enumerable: true,
  get: {
    redirectEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "redirectEnd_get", arguments);
    }
  }.redirectEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "fetchStart", {
  configurable: true,
  enumerable: true,
  get: {
    fetchStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "fetchStart_get", arguments);
    }
  }.fetchStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "domainLookupStart", {
  configurable: true,
  enumerable: true,
  get: {
    domainLookupStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "domainLookupStart_get", arguments);
    }
  }.domainLookupStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "domainLookupEnd", {
  configurable: true,
  enumerable: true,
  get: {
    domainLookupEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "domainLookupEnd_get", arguments);
    }
  }.domainLookupEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "connectStart", {
  configurable: true,
  enumerable: true,
  get: {
    connectStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "connectStart_get", arguments);
    }
  }.connectStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "connectEnd", {
  configurable: true,
  enumerable: true,
  get: {
    connectEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "connectEnd_get", arguments);
    }
  }.connectEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "secureConnectionStart", {
  configurable: true,
  enumerable: true,
  get: {
    secureConnectionStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "secureConnectionStart_get", arguments);
    }
  }.secureConnectionStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "requestStart", {
  configurable: true,
  enumerable: true,
  get: {
    requestStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "requestStart_get", arguments);
    }
  }.requestStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "responseStart", {
  configurable: true,
  enumerable: true,
  get: {
    responseStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "responseStart_get", arguments);
    }
  }.responseStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "responseEnd", {
  configurable: true,
  enumerable: true,
  get: {
    responseEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "responseEnd_get", arguments);
    }
  }.responseEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "domLoading", {
  configurable: true,
  enumerable: true,
  get: {
    domLoading() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "domLoading_get", arguments);
    }
  }.domLoading,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "domInteractive", {
  configurable: true,
  enumerable: true,
  get: {
    domInteractive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "domInteractive_get", arguments);
    }
  }.domInteractive,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "domContentLoadedEventStart", {
  configurable: true,
  enumerable: true,
  get: {
    domContentLoadedEventStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "domContentLoadedEventStart_get", arguments);
    }
  }.domContentLoadedEventStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "domContentLoadedEventEnd", {
  configurable: true,
  enumerable: true,
  get: {
    domContentLoadedEventEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "domContentLoadedEventEnd_get", arguments);
    }
  }.domContentLoadedEventEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "domComplete", {
  configurable: true,
  enumerable: true,
  get: {
    domComplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "domComplete_get", arguments);
    }
  }.domComplete,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "loadEventStart", {
  configurable: true,
  enumerable: true,
  get: {
    loadEventStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "loadEventStart_get", arguments);
    }
  }.loadEventStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "loadEventEnd", {
  configurable: true,
  enumerable: true,
  get: {
    loadEventEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "loadEventEnd_get", arguments);
    }
  }.loadEventEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceTiming"].prototype, "PerformanceTiming", "toJSON", arguments);
    }
  }.toJSON
});