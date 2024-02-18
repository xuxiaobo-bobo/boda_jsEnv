// ReportingObserver对象

bodaEnv.memory.globlProtoObj["ReportingObserver"] = function ReportingObserver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ReportingObserver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ReportingObserver"], "ReportingObserver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReportingObserver"].prototype, "disconnect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disconnect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReportingObserver"].prototype, "ReportingObserver", "disconnect", arguments);
    }
  }.disconnect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReportingObserver"].prototype, "observe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    observe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReportingObserver"].prototype, "ReportingObserver", "observe", arguments);
    }
  }.observe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ReportingObserver"].prototype, "takeRecords", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    takeRecords() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ReportingObserver"].prototype, "ReportingObserver", "takeRecords", arguments);
    }
  }.takeRecords
});