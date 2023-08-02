// ReportingObserver对象

ReportingObserver = function ReportingObserver() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ReportingObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ReportingObserver': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ReportingObserver 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ReportingObserver, "ReportingObserver");
bodavm.toolsFunc.defineProperty(ReportingObserver.prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, ReportingObserver.prototype, "ReportingObserver", "disconnect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReportingObserver.prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, ReportingObserver.prototype, "ReportingObserver", "observe", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReportingObserver.prototype, "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takeRecords() {
    return bodavm.toolsFunc.dispatch(this, ReportingObserver.prototype, "ReportingObserver", "takeRecords", arguments);
  }
});