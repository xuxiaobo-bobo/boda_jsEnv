// PerformanceEventTiming对象

bodaEnv.memory.globlProtoObj["PerformanceEventTiming"] = function PerformanceEventTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceEventTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceEventTiming"], "PerformanceEventTiming");
bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "processingStart", {
  configurable: true,
  enumerable: true,
  get: {
    processingStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "PerformanceEventTiming", "processingStart_get", arguments);
    }
  }.processingStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "processingEnd", {
  configurable: true,
  enumerable: true,
  get: {
    processingEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "PerformanceEventTiming", "processingEnd_get", arguments);
    }
  }.processingEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "cancelable", {
  configurable: true,
  enumerable: true,
  get: {
    cancelable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "PerformanceEventTiming", "cancelable_get", arguments);
    }
  }.cancelable,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "target", {
  configurable: true,
  enumerable: true,
  get: {
    target() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "PerformanceEventTiming", "target_get", arguments);
    }
  }.target,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "interactionId", {
  configurable: true,
  enumerable: true,
  get: {
    interactionId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "PerformanceEventTiming", "interactionId_get", arguments);
    }
  }.interactionId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceEventTiming"].prototype, "PerformanceEventTiming", "toJSON", arguments);
    }
  }.toJSON
});