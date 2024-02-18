// Scheduler对象

bodaEnv.memory.globlProtoObj["Scheduler"] = function Scheduler() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Scheduler 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Scheduler"], "Scheduler");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Scheduler"].prototype, "postTask", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    postTask() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Scheduler"].prototype, "Scheduler", "postTask", arguments);
    }
  }.postTask
});

// scheduler对象

bodaEnv.memory.globlProtoObj["scheduler"] = new bodaEnv.memory.globlProtoObj["Scheduler"]('bobo');