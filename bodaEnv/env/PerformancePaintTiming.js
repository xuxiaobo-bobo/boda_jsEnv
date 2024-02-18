// PerformancePaintTiming对象

bodaEnv.memory.globlProtoObj["PerformancePaintTiming"] = function PerformancePaintTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformancePaintTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformancePaintTiming"], "PerformancePaintTiming");
bodaEnv.memory.globlProtoObj["PerformancePaintTiming"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["PerformancePaintTiming"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];