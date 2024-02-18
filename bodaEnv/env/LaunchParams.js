// LaunchParams对象

bodaEnv.memory.globlProtoObj["LaunchParams"] = function LaunchParams() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('LaunchParams 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["LaunchParams"], "LaunchParams");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LaunchParams"].prototype, "files", {
  configurable: true,
  enumerable: true,
  get: {
    files() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LaunchParams"].prototype, "LaunchParams", "files_get", arguments);
    }
  }.files,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["LaunchParams"].prototype, "targetURL", {
  configurable: true,
  enumerable: true,
  get: {
    targetURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["LaunchParams"].prototype, "LaunchParams", "targetURL_get", arguments);
    }
  }.targetURL,
  set: undefined
});