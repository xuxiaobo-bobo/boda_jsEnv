// NavigationCurrentEntryChangeEvent对象

bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"] = function NavigationCurrentEntryChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('NavigationCurrentEntryChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"], "NavigationCurrentEntryChangeEvent");
bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"].prototype, "navigationType", {
  configurable: true,
  enumerable: true,
  get: {
    navigationType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"].prototype, "NavigationCurrentEntryChangeEvent", "navigationType_get", arguments);
    }
  }.navigationType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"].prototype, "from", {
  configurable: true,
  enumerable: true,
  get: {
    from() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["NavigationCurrentEntryChangeEvent"].prototype, "NavigationCurrentEntryChangeEvent", "from_get", arguments);
    }
  }.from,
  set: undefined
});