// TaskSignal对象

bodaEnv.memory.globlProtoObj["TaskSignal"] = function TaskSignal() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TaskSignal 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TaskSignal"], "TaskSignal");
bodaEnv.memory.globlProtoObj["TaskSignal"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AbortSignal"].prototype;
bodaEnv.memory.globlProtoObj["TaskSignal"].__proto__ = bodaEnv.memory.globlProtoObj["AbortSignal"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskSignal"], "any", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    any() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Text"], "TaskSignal", "any", arguments);
    }
  }.any
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskSignal"].prototype, "priority", {
  configurable: true,
  enumerable: true,
  get: {
    priority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskSignal"].prototype, "TaskSignal", "priority_get", arguments);
    }
  }.priority,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskSignal"].prototype, "onprioritychange", {
  configurable: true,
  enumerable: true,
  get: {
    onprioritychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskSignal"].prototype, "TaskSignal", "onprioritychange_get", arguments);
    }
  }.onprioritychange,
  set: {
    onprioritychange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskSignal"].prototype, "TaskSignal", "onprioritychange_set", arguments);
    }
  }.onprioritychange
});