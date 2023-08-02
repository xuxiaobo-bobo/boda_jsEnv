// RTCStatsReport对象

RTCStatsReport = function RTCStatsReport() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCStatsReport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCStatsReport 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCStatsReport, "RTCStatsReport");
bodavm.toolsFunc.defineProperty(RTCStatsReport.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, RTCStatsReport.prototype, "RTCStatsReport", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCStatsReport.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, RTCStatsReport.prototype, "RTCStatsReport", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCStatsReport.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, RTCStatsReport.prototype, "RTCStatsReport", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCStatsReport.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, RTCStatsReport.prototype, "RTCStatsReport", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCStatsReport.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, RTCStatsReport.prototype, "RTCStatsReport", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCStatsReport.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, RTCStatsReport.prototype, "RTCStatsReport", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCStatsReport.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, RTCStatsReport.prototype, "RTCStatsReport", "values", arguments);
  }
});