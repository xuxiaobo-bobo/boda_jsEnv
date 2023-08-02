// PerformanceResourceTiming对象

PerformanceResourceTiming = function PerformanceResourceTiming() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PerformanceResourceTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PerformanceResourceTiming 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PerformanceResourceTiming, "PerformanceResourceTiming");
PerformanceResourceTiming.prototype.__proto__ = PerformanceEntry.prototype;
PerformanceResourceTiming.__proto__ = PerformanceEntry;
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "initiatorType", {
  configurable: true,
  enumerable: true,
  get: function initiatorType() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "initiatorType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "nextHopProtocol", {
  configurable: true,
  enumerable: true,
  get: function nextHopProtocol() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "nextHopProtocol_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "workerStart", {
  configurable: true,
  enumerable: true,
  get: function workerStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "workerStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "redirectStart", {
  configurable: true,
  enumerable: true,
  get: function redirectStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "redirectStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "redirectEnd", {
  configurable: true,
  enumerable: true,
  get: function redirectEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "redirectEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "fetchStart", {
  configurable: true,
  enumerable: true,
  get: function fetchStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "fetchStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "domainLookupStart", {
  configurable: true,
  enumerable: true,
  get: function domainLookupStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "domainLookupStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "domainLookupEnd", {
  configurable: true,
  enumerable: true,
  get: function domainLookupEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "domainLookupEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "connectStart", {
  configurable: true,
  enumerable: true,
  get: function connectStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "connectStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "connectEnd", {
  configurable: true,
  enumerable: true,
  get: function connectEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "connectEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "secureConnectionStart", {
  configurable: true,
  enumerable: true,
  get: function secureConnectionStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "secureConnectionStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "requestStart", {
  configurable: true,
  enumerable: true,
  get: function requestStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "requestStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "responseStart", {
  configurable: true,
  enumerable: true,
  get: function responseStart() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "responseStart_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "responseEnd", {
  configurable: true,
  enumerable: true,
  get: function responseEnd() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "responseEnd_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "transferSize", {
  configurable: true,
  enumerable: true,
  get: function transferSize() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "transferSize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "encodedBodySize", {
  configurable: true,
  enumerable: true,
  get: function encodedBodySize() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "encodedBodySize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "decodedBodySize", {
  configurable: true,
  enumerable: true,
  get: function decodedBodySize() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "decodedBodySize_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "serverTiming", {
  configurable: true,
  enumerable: true,
  get: function serverTiming() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "serverTiming_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "renderBlockingStatus", {
  configurable: true,
  enumerable: true,
  get: function renderBlockingStatus() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "renderBlockingStatus_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PerformanceResourceTiming.prototype, "responseStatus", {
  configurable: true,
  enumerable: true,
  get: function responseStatus() {
    return bodavm.toolsFunc.dispatch(this, PerformanceResourceTiming.prototype, "PerformanceResourceTiming", "responseStatus_get", arguments);
  },
  set: undefined
});