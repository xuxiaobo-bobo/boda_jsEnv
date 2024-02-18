// PerformanceServerTiming对象

bodaEnv.memory.globlProtoObj["PerformanceServerTiming"] = function PerformanceServerTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PerformanceServerTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PerformanceServerTiming"], "PerformanceServerTiming");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "PerformanceServerTiming", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "duration", {
  configurable: true,
  enumerable: true,
  get: {
    duration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "PerformanceServerTiming", "duration_get", arguments);
    }
  }.duration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "description", {
  configurable: true,
  enumerable: true,
  get: {
    description() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "PerformanceServerTiming", "description_get", arguments);
    }
  }.description,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PerformanceServerTiming"].prototype, "PerformanceServerTiming", "toJSON", arguments);
    }
  }.toJSON
});