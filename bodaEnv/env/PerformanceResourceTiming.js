// PerformanceResourceTiming对象

bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"] = function PerformanceResourceTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceResourceTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"], "PerformanceResourceTiming");
bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "initiatorType", {
  configurable: true,
  enumerable: true,
  get: {
    initiatorType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "initiatorType_get", arguments);
    }
  }.initiatorType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "nextHopProtocol", {
  configurable: true,
  enumerable: true,
  get: {
    nextHopProtocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "nextHopProtocol_get", arguments);
    }
  }.nextHopProtocol,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "workerStart", {
  configurable: true,
  enumerable: true,
  get: {
    workerStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "workerStart_get", arguments);
    }
  }.workerStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "redirectStart", {
  configurable: true,
  enumerable: true,
  get: {
    redirectStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "redirectStart_get", arguments);
    }
  }.redirectStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "redirectEnd", {
  configurable: true,
  enumerable: true,
  get: {
    redirectEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "redirectEnd_get", arguments);
    }
  }.redirectEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "fetchStart", {
  configurable: true,
  enumerable: true,
  get: {
    fetchStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "fetchStart_get", arguments);
    }
  }.fetchStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "domainLookupStart", {
  configurable: true,
  enumerable: true,
  get: {
    domainLookupStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "domainLookupStart_get", arguments);
    }
  }.domainLookupStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "domainLookupEnd", {
  configurable: true,
  enumerable: true,
  get: {
    domainLookupEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "domainLookupEnd_get", arguments);
    }
  }.domainLookupEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "connectStart", {
  configurable: true,
  enumerable: true,
  get: {
    connectStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "connectStart_get", arguments);
    }
  }.connectStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "connectEnd", {
  configurable: true,
  enumerable: true,
  get: {
    connectEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "connectEnd_get", arguments);
    }
  }.connectEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "secureConnectionStart", {
  configurable: true,
  enumerable: true,
  get: {
    secureConnectionStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "secureConnectionStart_get", arguments);
    }
  }.secureConnectionStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "requestStart", {
  configurable: true,
  enumerable: true,
  get: {
    requestStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "requestStart_get", arguments);
    }
  }.requestStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "responseStart", {
  configurable: true,
  enumerable: true,
  get: {
    responseStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "responseStart_get", arguments);
    }
  }.responseStart,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "responseEnd", {
  configurable: true,
  enumerable: true,
  get: {
    responseEnd() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "responseEnd_get", arguments);
    }
  }.responseEnd,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "transferSize", {
  configurable: true,
  enumerable: true,
  get: {
    transferSize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "transferSize_get", arguments);
    }
  }.transferSize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "encodedBodySize", {
  configurable: true,
  enumerable: true,
  get: {
    encodedBodySize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "encodedBodySize_get", arguments);
    }
  }.encodedBodySize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "decodedBodySize", {
  configurable: true,
  enumerable: true,
  get: {
    decodedBodySize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "decodedBodySize_get", arguments);
    }
  }.decodedBodySize,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "serverTiming", {
  configurable: true,
  enumerable: true,
  get: {
    serverTiming() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "serverTiming_get", arguments);
    }
  }.serverTiming,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "renderBlockingStatus", {
  configurable: true,
  enumerable: true,
  get: {
    renderBlockingStatus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "renderBlockingStatus_get", arguments);
    }
  }.renderBlockingStatus,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "responseStatus", {
  configurable: true,
  enumerable: true,
  get: {
    responseStatus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "responseStatus_get", arguments);
    }
  }.responseStatus,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "firstInterimResponseStart", {
  configurable: true,
  enumerable: true,
  get: {
    firstInterimResponseStart() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceResourceTiming"].prototype, "PerformanceResourceTiming", "firstInterimResponseStart_get", arguments);
    }
  }.firstInterimResponseStart,
  set: undefined
});