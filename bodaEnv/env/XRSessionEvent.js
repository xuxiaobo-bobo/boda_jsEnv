// XRSessionEvent对象

bodaEnv.memory.globlProtoObj["XRSessionEvent"] = function XRSessionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRSessionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRSessionEvent"], "XRSessionEvent");
bodaEnv.memory.globlProtoObj["XRSessionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["XRSessionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRSessionEvent"].prototype, "session", {
  configurable: true,
  enumerable: true,
  get: {
    session() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRSessionEvent"].prototype, "XRSessionEvent", "session_get", arguments);
    }
  }.session,
  set: undefined
});