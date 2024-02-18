// CookieChangeEvent对象

bodaEnv.memory.globlProtoObj["CookieChangeEvent"] = function CookieChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CookieChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CookieChangeEvent"], "CookieChangeEvent");
bodaEnv.memory.globlProtoObj["CookieChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["CookieChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieChangeEvent"].prototype, "changed", {
  configurable: true,
  enumerable: true,
  get: {
    changed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieChangeEvent"].prototype, "CookieChangeEvent", "changed_get", arguments);
    }
  }.changed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieChangeEvent"].prototype, "deleted", {
  configurable: true,
  enumerable: true,
  get: {
    deleted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieChangeEvent"].prototype, "CookieChangeEvent", "deleted_get", arguments);
    }
  }.deleted,
  set: undefined
});