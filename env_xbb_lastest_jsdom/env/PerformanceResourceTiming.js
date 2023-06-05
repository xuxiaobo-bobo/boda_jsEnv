// PerformanceResourceTiming对象

bodavm.memory.globalobj['PerformanceResourceTiming'] = function PerformanceResourceTiming() {
  console.log_copy('PerformanceResourceTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceResourceTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceResourceTiming'], "PerformanceResourceTiming");
bodavm.memory.globalobj['PerformanceResourceTiming'].prototype.__proto__ = bodavm.memory.globalobj['PerformanceEntry'].prototype;
bodavm.memory.globalobj['PerformanceResourceTiming'].__proto__ = bodavm.memory.globalobj['PerformanceEntry'];
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "initiatorType", {
  configurable: true,
  enumerable: true,
  get: function initiatorType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "initiatorType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "nextHopProtocol", {
  configurable: true,
  enumerable: true,
  get: function nextHopProtocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "nextHopProtocol_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "workerStart", {
  configurable: true,
  enumerable: true,
  get: function workerStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "workerStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "redirectStart", {
  configurable: true,
  enumerable: true,
  get: function redirectStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "redirectStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "redirectEnd", {
  configurable: true,
  enumerable: true,
  get: function redirectEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "redirectEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "fetchStart", {
  configurable: true,
  enumerable: true,
  get: function fetchStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "fetchStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "domainLookupStart", {
  configurable: true,
  enumerable: true,
  get: function domainLookupStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "domainLookupStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "domainLookupEnd", {
  configurable: true,
  enumerable: true,
  get: function domainLookupEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "domainLookupEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "connectStart", {
  configurable: true,
  enumerable: true,
  get: function connectStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "connectStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "connectEnd", {
  configurable: true,
  enumerable: true,
  get: function connectEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "connectEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "secureConnectionStart", {
  configurable: true,
  enumerable: true,
  get: function secureConnectionStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "secureConnectionStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "requestStart", {
  configurable: true,
  enumerable: true,
  get: function requestStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "requestStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "responseStart", {
  configurable: true,
  enumerable: true,
  get: function responseStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "responseStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "responseEnd", {
  configurable: true,
  enumerable: true,
  get: function responseEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "responseEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "transferSize", {
  configurable: true,
  enumerable: true,
  get: function transferSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "transferSize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "encodedBodySize", {
  configurable: true,
  enumerable: true,
  get: function encodedBodySize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "encodedBodySize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "decodedBodySize", {
  configurable: true,
  enumerable: true,
  get: function decodedBodySize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "decodedBodySize_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "serverTiming", {
  configurable: true,
  enumerable: true,
  get: function serverTiming() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "serverTiming_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "renderBlockingStatus", {
  configurable: true,
  enumerable: true,
  get: function renderBlockingStatus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "renderBlockingStatus_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceResourceTiming', "responseStatus", {
  configurable: true,
  enumerable: true,
  get: function responseStatus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceResourceTiming'].prototype, "PerformanceResourceTiming", "responseStatus_get", arguments);
  },
  set: undefined
}, 'prototype');