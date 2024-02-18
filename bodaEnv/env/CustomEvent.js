// CustomEvent对象

bodaEnv.memory.globlProtoObj["CustomEvent"] = function CustomEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CustomEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CustomEvent"], "CustomEvent");
bodaEnv.memory.globlProtoObj["CustomEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["CustomEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomEvent"].prototype, "detail", {
  configurable: true,
  enumerable: true,
  get: {
    detail() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomEvent"].prototype, "CustomEvent", "detail_get", arguments);
    }
  }.detail,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomEvent"].prototype, "initCustomEvent", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initCustomEvent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomEvent"].prototype, "CustomEvent", "initCustomEvent", arguments);
    }
  }.initCustomEvent
});