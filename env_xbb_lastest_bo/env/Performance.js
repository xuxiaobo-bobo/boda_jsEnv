// Performance对象

Performance = function Performance() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Performance)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Performance 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Performance, "Performance");
Performance.prototype.__proto__ = EventTarget.prototype;
Performance.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Performance.prototype, "timeOrigin", {
  configurable: true,
  enumerable: true,
  get: function timeOrigin() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "timeOrigin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "onresourcetimingbufferfull", {
  configurable: true,
  enumerable: true,
  get: function onresourcetimingbufferfull() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "onresourcetimingbufferfull_get", arguments);
  },
  set: function onresourcetimingbufferfull() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "onresourcetimingbufferfull_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "clearMarks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearMarks() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "clearMarks", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "clearMeasures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearMeasures() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "clearMeasures", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "clearResourceTimings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearResourceTimings() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "clearResourceTimings", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "getEntries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntries() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "getEntries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "getEntriesByName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByName() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "getEntriesByName", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "getEntriesByType", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEntriesByType() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "getEntriesByType", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "mark", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function mark() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "mark", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "measure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function measure() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "measure", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "now", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function now() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "now", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "setResourceTimingBufferSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setResourceTimingBufferSize() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "setResourceTimingBufferSize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "timing", {
  configurable: true,
  enumerable: true,
  get: function timing() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "timing_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "navigation", {
  configurable: true,
  enumerable: true,
  get: function navigation() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "navigation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "memory", {
  configurable: true,
  enumerable: true,
  get: function memory() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "memory_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Performance.prototype, "eventCounts", {
  configurable: true,
  enumerable: true,
  get: function eventCounts() {
    return bodavm.toolsFunc.dispatch(this, Performance.prototype, "Performance", "eventCounts_get", arguments);
  },
  set: undefined
});