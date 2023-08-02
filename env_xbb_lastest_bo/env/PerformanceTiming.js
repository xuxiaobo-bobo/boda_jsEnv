// PerformanceTiming对象

PerformanceTiming = function PerformanceTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceTiming, "PerformanceTiming");
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "navigationStart", {
  configurable: true,
  enumerable: true,
  get: function navigationStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "navigationStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "unloadEventStart", {
  configurable: true,
  enumerable: true,
  get: function unloadEventStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "unloadEventStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "unloadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function unloadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "unloadEventEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "redirectStart", {
  configurable: true,
  enumerable: true,
  get: function redirectStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "redirectStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "redirectEnd", {
  configurable: true,
  enumerable: true,
  get: function redirectEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "redirectEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "fetchStart", {
  configurable: true,
  enumerable: true,
  get: function fetchStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "fetchStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "domainLookupStart", {
  configurable: true,
  enumerable: true,
  get: function domainLookupStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "domainLookupStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "domainLookupEnd", {
  configurable: true,
  enumerable: true,
  get: function domainLookupEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "domainLookupEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "connectStart", {
  configurable: true,
  enumerable: true,
  get: function connectStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "connectStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "connectEnd", {
  configurable: true,
  enumerable: true,
  get: function connectEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "connectEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "secureConnectionStart", {
  configurable: true,
  enumerable: true,
  get: function secureConnectionStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "secureConnectionStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "requestStart", {
  configurable: true,
  enumerable: true,
  get: function requestStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "requestStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "responseStart", {
  configurable: true,
  enumerable: true,
  get: function responseStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "responseStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "responseEnd", {
  configurable: true,
  enumerable: true,
  get: function responseEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "responseEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "domLoading", {
  configurable: true,
  enumerable: true,
  get: function domLoading() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "domLoading_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "domInteractive", {
  configurable: true,
  enumerable: true,
  get: function domInteractive() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "domInteractive_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "domContentLoadedEventStart", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "domContentLoadedEventStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "domContentLoadedEventEnd", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "domContentLoadedEventEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "domComplete", {
  configurable: true,
  enumerable: true,
  get: function domComplete() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "domComplete_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "loadEventStart", {
  configurable: true,
  enumerable: true,
  get: function loadEventStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "loadEventStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "loadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function loadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "loadEventEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceTiming.prototype, "PerformanceTiming", "toJSON", arguments);
  }
});