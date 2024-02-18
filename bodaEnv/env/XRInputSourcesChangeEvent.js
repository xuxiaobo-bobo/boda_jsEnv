// XRInputSourcesChangeEvent对象

bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"] = function XRInputSourcesChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRInputSourcesChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"], "XRInputSourcesChangeEvent");
bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].prototype, "session", {
  configurable: true,
  enumerable: true,
  get: {
    session() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].prototype, "XRInputSourcesChangeEvent", "session_get", arguments);
    }
  }.session,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].prototype, "added", {
  configurable: true,
  enumerable: true,
  get: {
    added() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].prototype, "XRInputSourcesChangeEvent", "added_get", arguments);
    }
  }.added,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].prototype, "removed", {
  configurable: true,
  enumerable: true,
  get: {
    removed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSourcesChangeEvent"].prototype, "XRInputSourcesChangeEvent", "removed_get", arguments);
    }
  }.removed,
  set: undefined
});