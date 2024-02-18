// launchQueue对象

// LaunchQueue对象

bodaEnv.memory.globlProtoObj["LaunchQueue"] = function LaunchQueue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('LaunchQueue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["LaunchQueue"], "LaunchQueue");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LaunchQueue"].prototype, "setConsumer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setConsumer() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LaunchQueue"].prototype, "LaunchQueue", "setConsumer", arguments);
    }
  }.setConsumer
});
bodaEnv.memory.globlProtoObj["launchQueue"] = new bodaEnv.memory.globlProtoObj["LaunchQueue"]('bobo');