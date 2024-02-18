// PerformanceNavigationTiming对象

bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"] = function PerformanceNavigationTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceNavigationTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"], "PerformanceNavigationTiming");
bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype;
bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "unloadEventStart", {
  configurable: true,
  enumerable: true,
  get: {
    unloadEventStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "unloadEventStart_get", arguments);
    }
  }.unloadEventStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "unloadEventEnd", {
  configurable: true,
  enumerable: true,
  get: {
    unloadEventEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "unloadEventEnd_get", arguments);
    }
  }.unloadEventEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "domInteractive", {
  configurable: true,
  enumerable: true,
  get: {
    domInteractive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "domInteractive_get", arguments);
    }
  }.domInteractive,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "domContentLoadedEventStart", {
  configurable: true,
  enumerable: true,
  get: {
    domContentLoadedEventStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "domContentLoadedEventStart_get", arguments);
    }
  }.domContentLoadedEventStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "domContentLoadedEventEnd", {
  configurable: true,
  enumerable: true,
  get: {
    domContentLoadedEventEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "domContentLoadedEventEnd_get", arguments);
    }
  }.domContentLoadedEventEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "domComplete", {
  configurable: true,
  enumerable: true,
  get: {
    domComplete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "domComplete_get", arguments);
    }
  }.domComplete,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "loadEventStart", {
  configurable: true,
  enumerable: true,
  get: {
    loadEventStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "loadEventStart_get", arguments);
    }
  }.loadEventStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "loadEventEnd", {
  configurable: true,
  enumerable: true,
  get: {
    loadEventEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "loadEventEnd_get", arguments);
    }
  }.loadEventEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "type_get", arguments);
    }
  }.type,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "redirectCount", {
  configurable: true,
  enumerable: true,
  get: {
    redirectCount() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "redirectCount_get", arguments);
    }
  }.redirectCount,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "activationStart", {
  configurable: true,
  enumerable: true,
  get: {
    activationStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "activationStart_get", arguments);
    }
  }.activationStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "criticalCHRestart", {
  configurable: true,
  enumerable: true,
  get: {
    criticalCHRestart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceNavigationTiming"].prototype, "PerformanceNavigationTiming", "criticalCHRestart_get", arguments);
    }
  }.criticalCHRestart,
  set: undefined
});