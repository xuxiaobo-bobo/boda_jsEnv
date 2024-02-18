// TaskPriorityChangeEvent对象

bodaEnv.memory.globlProtoObj["TaskPriorityChangeEvent"] = function TaskPriorityChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TaskPriorityChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TaskPriorityChangeEvent"], "TaskPriorityChangeEvent");
bodaEnv.memory.globlProtoObj["TaskPriorityChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["TaskPriorityChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskPriorityChangeEvent"].prototype, "previousPriority", {
  configurable: true,
  enumerable: true,
  get: {
    previousPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskPriorityChangeEvent"].prototype, "TaskPriorityChangeEvent", "previousPriority_get", arguments);
    }
  }.previousPriority,
  set: undefined
});