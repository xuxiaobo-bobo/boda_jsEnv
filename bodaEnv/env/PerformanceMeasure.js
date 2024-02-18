// PerformanceMeasure对象

bodaEnv.memory.globlProtoObj["PerformanceMeasure"] = function PerformanceMeasure() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceMeasure 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceMeasure"], "PerformanceMeasure");
bodaEnv.memory.globlProtoObj["PerformanceMeasure"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["PerformanceMeasure"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceMeasure"].prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: {
    detail() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceMeasure"].prototype, "PerformanceMeasure", "detail_get", arguments);
    }
  }.detail,
  set: undefined
});