// PerformanceEventTiming对象

PerformanceEventTiming = function PerformanceEventTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceEventTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceEventTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceEventTiming, "PerformanceEventTiming");
PerformanceEventTiming.prototype.__proto__ = PerformanceEntry.prototype;
PerformanceEventTiming.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(PerformanceEventTiming.prototype, "processingStart", {
  configurable: true,
  enumerable: true,
  get: function processingStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceEventTiming.prototype, "PerformanceEventTiming", "processingStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceEventTiming.prototype, "processingEnd", {
  configurable: true,
  enumerable: true,
  get: function processingEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceEventTiming.prototype, "PerformanceEventTiming", "processingEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceEventTiming.prototype, "cancelable", {
  configurable: true,
  enumerable: true,
  get: function cancelable() {
    return bodavm.toolsFunc.dispatch(this, PerformanceEventTiming.prototype, "PerformanceEventTiming", "cancelable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceEventTiming.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, PerformanceEventTiming.prototype, "PerformanceEventTiming", "target_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceEventTiming.prototype, "interactionId", {
  configurable: true,
  enumerable: true,
  get: function interactionId() {
    return bodavm.toolsFunc.dispatch(this, PerformanceEventTiming.prototype, "PerformanceEventTiming", "interactionId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceEventTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceEventTiming.prototype, "PerformanceEventTiming", "toJSON", arguments);
  }
});