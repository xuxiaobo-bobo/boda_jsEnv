// ReportingObserver对象

bodavm.memory.globalobj['ReportingObserver'] = function ReportingObserver() {
  console.log_copy('ReportingObserver 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ReportingObserver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ReportingObserver': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ReportingObserver'], "ReportingObserver");
bodavm.toolsFunc.defineProperty('ReportingObserver', "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function disconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReportingObserver'].prototype, "ReportingObserver", "disconnect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReportingObserver', "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function observe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReportingObserver'].prototype, "ReportingObserver", "observe", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ReportingObserver', "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takeRecords() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ReportingObserver'].prototype, "ReportingObserver", "takeRecords", arguments);
  }
}, 'prototype');