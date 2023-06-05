// PerformanceTiming对象

bodavm.memory.globalobj['PerformanceTiming'] = function PerformanceTiming() {
  console.log_copy('PerformanceTiming 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PerformanceTiming)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PerformanceTiming'], "PerformanceTiming");
bodavm.toolsFunc.defineProperty('PerformanceTiming', "navigationStart", {
  configurable: true,
  enumerable: true,
  get: function navigationStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "navigationStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "unloadEventStart", {
  configurable: true,
  enumerable: true,
  get: function unloadEventStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "unloadEventStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "unloadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function unloadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "unloadEventEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "redirectStart", {
  configurable: true,
  enumerable: true,
  get: function redirectStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "redirectStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "redirectEnd", {
  configurable: true,
  enumerable: true,
  get: function redirectEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "redirectEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "fetchStart", {
  configurable: true,
  enumerable: true,
  get: function fetchStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "fetchStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "domainLookupStart", {
  configurable: true,
  enumerable: true,
  get: function domainLookupStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "domainLookupStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "domainLookupEnd", {
  configurable: true,
  enumerable: true,
  get: function domainLookupEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "domainLookupEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "connectStart", {
  configurable: true,
  enumerable: true,
  get: function connectStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "connectStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "connectEnd", {
  configurable: true,
  enumerable: true,
  get: function connectEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "connectEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "secureConnectionStart", {
  configurable: true,
  enumerable: true,
  get: function secureConnectionStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "secureConnectionStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "requestStart", {
  configurable: true,
  enumerable: true,
  get: function requestStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "requestStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "responseStart", {
  configurable: true,
  enumerable: true,
  get: function responseStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "responseStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "responseEnd", {
  configurable: true,
  enumerable: true,
  get: function responseEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "responseEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "domLoading", {
  configurable: true,
  enumerable: true,
  get: function domLoading() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "domLoading_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "domInteractive", {
  configurable: true,
  enumerable: true,
  get: function domInteractive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "domInteractive_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "domContentLoadedEventStart", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "domContentLoadedEventStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "domContentLoadedEventEnd", {
  configurable: true,
  enumerable: true,
  get: function domContentLoadedEventEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "domContentLoadedEventEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "domComplete", {
  configurable: true,
  enumerable: true,
  get: function domComplete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "domComplete_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "loadEventStart", {
  configurable: true,
  enumerable: true,
  get: function loadEventStart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "loadEventStart_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "loadEventEnd", {
  configurable: true,
  enumerable: true,
  get: function loadEventEnd() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "loadEventEnd_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PerformanceTiming', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PerformanceTiming'].prototype, "PerformanceTiming", "toJSON", arguments);
  }
}, 'prototype');