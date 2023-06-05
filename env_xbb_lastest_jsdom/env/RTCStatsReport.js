// RTCStatsReport对象

bodavm.memory.globalobj['RTCStatsReport'] = function RTCStatsReport() {
  console.log_copy('RTCStatsReport 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCStatsReport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCStatsReport'], "RTCStatsReport");
bodavm.toolsFunc.defineProperty('RTCStatsReport', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCStatsReport'].prototype, "RTCStatsReport", "size_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCStatsReport', "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCStatsReport'].prototype, "RTCStatsReport", "entries", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCStatsReport', "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCStatsReport'].prototype, "RTCStatsReport", "forEach", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCStatsReport', "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCStatsReport'].prototype, "RTCStatsReport", "get", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCStatsReport', "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCStatsReport'].prototype, "RTCStatsReport", "has", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCStatsReport', "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCStatsReport'].prototype, "RTCStatsReport", "keys", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCStatsReport', "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCStatsReport'].prototype, "RTCStatsReport", "values", arguments);
  }
}, 'prototype');