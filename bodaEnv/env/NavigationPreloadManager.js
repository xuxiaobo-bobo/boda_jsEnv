// NavigationPreloadManager对象

bodaEnv.memory.globlProtoObj["NavigationPreloadManager"] = function NavigationPreloadManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigationPreloadManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigationPreloadManager"], "NavigationPreloadManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "disable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "NavigationPreloadManager", "disable", arguments);
    }
  }.disable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "enable", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "NavigationPreloadManager", "enable", arguments);
    }
  }.enable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getState() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "NavigationPreloadManager", "getState", arguments);
    }
  }.getState
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "setHeaderValue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setHeaderValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationPreloadManager"].prototype, "NavigationPreloadManager", "setHeaderValue", arguments);
    }
  }.setHeaderValue
});