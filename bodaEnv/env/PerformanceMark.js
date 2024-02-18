// PerformanceMark对象

bodaEnv.memory.globlProtoObj["PerformanceMark"] = function PerformanceMark() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceMark 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceMark"], "PerformanceMark");
bodaEnv.memory.globlProtoObj["PerformanceMark"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["PerformanceMark"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceMark"].prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: {
    detail() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceMark"].prototype, "PerformanceMark", "detail_get", arguments);
    }
  }.detail,
  set: undefined
});