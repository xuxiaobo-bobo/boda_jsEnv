// LayoutShift对象

bodaEnv.memory.globlProtoObj["LayoutShift"] = function LayoutShift() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('LayoutShift 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["LayoutShift"], "LayoutShift");
bodaEnv.memory.globlProtoObj["LayoutShift"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["LayoutShift"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "LayoutShift", "value_get", arguments);
    }
  }.value,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "hadRecentInput", {
  configurable: true,
  enumerable: true,
  get: {
    hadRecentInput() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "LayoutShift", "hadRecentInput_get", arguments);
    }
  }.hadRecentInput,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "lastInputTime", {
  configurable: true,
  enumerable: true,
  get: {
    lastInputTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "LayoutShift", "lastInputTime_get", arguments);
    }
  }.lastInputTime,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "sources", {
  configurable: true,
  enumerable: true,
  get: {
    sources() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "LayoutShift", "sources_get", arguments);
    }
  }.sources,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LayoutShift"].prototype, "LayoutShift", "toJSON", arguments);
    }
  }.toJSON
});