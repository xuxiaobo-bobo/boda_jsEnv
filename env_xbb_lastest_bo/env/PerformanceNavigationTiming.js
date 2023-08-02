// PerformanceNavigationTiming对象

PerformanceNavigationTiming = function PerformanceNavigationTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceNavigationTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceNavigationTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceNavigationTiming, "PerformanceNavigationTiming");
PerformanceNavigationTiming.prototype.__proto__ = PerformanceResourceTiming.prototype;
PerformanceNavigationTiming.__proto__ = PerformanceResourceTiming;
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "unloadEventStart", {
  configurable: true,
  enumerable: true,
  get: function unloadEventStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "unloadEventStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "unloadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function unloadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "unloadEventEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "domInteractive", {
  configurable: true,
  enumerable: true,
  get: function domInteractive() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "domInteractive_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "domContentLoadedEventStart", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "domContentLoadedEventStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "domContentLoadedEventEnd", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "domContentLoadedEventEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "domComplete", {
  configurable: true,
  enumerable: true,
  get: function domComplete() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "domComplete_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "loadEventStart", {
  configurable: true,
  enumerable: true,
  get: function loadEventStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "loadEventStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "loadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function loadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "loadEventEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "redirectCount", {
  configurable: true,
  enumerable: true,
  get: function redirectCount() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "redirectCount_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "activationStart", {
  configurable: true,
  enumerable: true,
  get: function activationStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "activationStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceNavigationTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceNavigationTiming.prototype, "PerformanceNavigationTiming", "toJSON", arguments);
  }
});