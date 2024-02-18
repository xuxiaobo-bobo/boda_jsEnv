// PerformanceLongTaskTiming对象

bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"] = function PerformanceLongTaskTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceLongTaskTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"], "PerformanceLongTaskTiming");
bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"].prototype, "attribution", {
  configurable: true,
  enumerable: true,
  get: {
    attribution() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"].prototype, "PerformanceLongTaskTiming", "attribution_get", arguments);
    }
  }.attribution,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceLongTaskTiming"].prototype, "PerformanceLongTaskTiming", "toJSON", arguments);
    }
  }.toJSON
});