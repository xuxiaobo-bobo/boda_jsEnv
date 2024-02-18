// TaskAttributionTiming对象

bodaEnv.memory.globlProtoObj["TaskAttributionTiming"] = function TaskAttributionTiming() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TaskAttributionTiming 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TaskAttributionTiming"], "TaskAttributionTiming");
bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"].prototype;
bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].__proto__ = bodaEnv.memory.globlProtoObj["PerformanceEntry"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "containerType", {
  configurable: true,
  enumerable: true,
  get: {
    containerType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "TaskAttributionTiming", "containerType_get", arguments);
    }
  }.containerType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "containerSrc", {
  configurable: true,
  enumerable: true,
  get: {
    containerSrc() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "TaskAttributionTiming", "containerSrc_get", arguments);
    }
  }.containerSrc,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "containerId", {
  configurable: true,
  enumerable: true,
  get: {
    containerId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "TaskAttributionTiming", "containerId_get", arguments);
    }
  }.containerId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "containerName", {
  configurable: true,
  enumerable: true,
  get: {
    containerName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "TaskAttributionTiming", "containerName_get", arguments);
    }
  }.containerName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskAttributionTiming"].prototype, "TaskAttributionTiming", "toJSON", arguments);
    }
  }.toJSON
});