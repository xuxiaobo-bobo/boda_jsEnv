// TaskController对象

bodaEnv.memory.globlProtoObj["TaskController"] = function TaskController() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TaskController 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TaskController"], "TaskController");
bodaEnv.memory.globlProtoObj["TaskController"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AbortController"].prototype;
bodaEnv.memory.globlProtoObj["TaskController"].__proto__ = bodaEnv.memory.globlProtoObj["AbortController"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TaskController"].prototype, "setPriority", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setPriority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TaskController"].prototype, "TaskController", "setPriority", arguments);
    }
  }.setPriority
});