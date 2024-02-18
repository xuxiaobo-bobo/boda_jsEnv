// Performance对象

bodaEnv.memory.globlProtoObj["Performance"] = function Performance() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Performance 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Performance"], "Performance");
bodaEnv.memory.globlProtoObj["Performance"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["Performance"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "timeOrigin", {
  configurable: true,
  enumerable: true,
  get: {
    timeOrigin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "timeOrigin_get", arguments);
    }
  }.timeOrigin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "onresourcetimingbufferfull", {
  configurable: true,
  enumerable: true,
  get: {
    onresourcetimingbufferfull() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "onresourcetimingbufferfull_get", arguments);
    }
  }.onresourcetimingbufferfull,
  set: {
    onresourcetimingbufferfull() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "onresourcetimingbufferfull_set", arguments);
    }
  }.onresourcetimingbufferfull
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "clearMarks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearMarks() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "clearMarks", arguments);
    }
  }.clearMarks
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "clearMeasures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearMeasures() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "clearMeasures", arguments);
    }
  }.clearMeasures
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "clearResourceTimings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearResourceTimings() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "clearResourceTimings", arguments);
    }
  }.clearResourceTimings
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "getEntries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEntries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "getEntries", arguments);
    }
  }.getEntries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "getEntriesByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEntriesByName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "getEntriesByName", arguments);
    }
  }.getEntriesByName
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "getEntriesByType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEntriesByType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "getEntriesByType", arguments);
    }
  }.getEntriesByType
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "mark", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    mark() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "mark", arguments);
    }
  }.mark
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "measure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    measure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "measure", arguments);
    }
  }.measure
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "now", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    now() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "now", arguments);
    }
  }.now
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "setResourceTimingBufferSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setResourceTimingBufferSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "setResourceTimingBufferSize", arguments);
    }
  }.setResourceTimingBufferSize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "timing", {
  configurable: true,
  enumerable: true,
  get: {
    timing() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "timing_get", arguments);
    }
  }.timing,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "navigation", {
  configurable: true,
  enumerable: true,
  get: {
    navigation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "navigation_get", arguments);
    }
  }.navigation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "memory", {
  configurable: true,
  enumerable: true,
  get: {
    memory() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "memory_get", arguments);
    }
  }.memory,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Performance"].prototype, "eventCounts", {
  configurable: true,
  enumerable: true,
  get: {
    eventCounts() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Performance"].prototype, "Performance", "eventCounts_get", arguments);
    }
  }.eventCounts,
  set: undefined
});

// performance对象

bodaEnv.memory.globlProtoObj["performance"] = new bodaEnv.memory.globlProtoObj["Performance"]('bobo');