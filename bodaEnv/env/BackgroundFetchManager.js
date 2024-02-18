// BackgroundFetchManager对象

bodaEnv.memory.globlProtoObj["BackgroundFetchManager"] = function BackgroundFetchManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BackgroundFetchManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BackgroundFetchManager"], "BackgroundFetchManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchManager"].prototype, "fetch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fetch() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchManager"].prototype, "BackgroundFetchManager", "fetch", arguments);
    }
  }.fetch
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchManager"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchManager"].prototype, "BackgroundFetchManager", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BackgroundFetchManager"].prototype, "getIds", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getIds() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BackgroundFetchManager"].prototype, "BackgroundFetchManager", "getIds", arguments);
    }
  }.getIds
});