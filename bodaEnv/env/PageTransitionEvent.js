// PageTransitionEvent对象

bodaEnv.memory.globlProtoObj["PageTransitionEvent"] = function PageTransitionEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PageTransitionEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PageTransitionEvent"], "PageTransitionEvent");
bodaEnv.memory.globlProtoObj["PageTransitionEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["PageTransitionEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PageTransitionEvent"].prototype, "persisted", {
  configurable: true,
  enumerable: true,
  get: {
    persisted() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PageTransitionEvent"].prototype, "PageTransitionEvent", "persisted_get", arguments);
    }
  }.persisted,
  set: undefined
});