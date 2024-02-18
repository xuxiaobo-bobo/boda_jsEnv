// FocusEvent对象

bodaEnv.memory.globlProtoObj["FocusEvent"] = function FocusEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FocusEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FocusEvent"], "FocusEvent");
bodaEnv.memory.globlProtoObj["FocusEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"].prototype;
bodaEnv.memory.globlProtoObj["FocusEvent"].__proto__ = bodaEnv.memory.globlProtoObj["UIEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FocusEvent"].prototype, "relatedTarget", {
  configurable: true,
  enumerable: true,
  get: {
    relatedTarget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FocusEvent"].prototype, "FocusEvent", "relatedTarget_get", arguments);
    }
  }.relatedTarget,
  set: undefined
});