// MediaQueryListEvent对象

bodaEnv.memory.globlProtoObj["MediaQueryListEvent"] = function MediaQueryListEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaQueryListEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaQueryListEvent"], "MediaQueryListEvent");
bodaEnv.memory.globlProtoObj["MediaQueryListEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MediaQueryListEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaQueryListEvent"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryListEvent"].prototype, "MediaQueryListEvent", "media_get", arguments);
    }
  }.media,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaQueryListEvent"].prototype, "matches", {
  configurable: true,
  enumerable: true,
  get: {
    matches() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaQueryListEvent"].prototype, "MediaQueryListEvent", "matches_get", arguments);
    }
  }.matches,
  set: undefined
});