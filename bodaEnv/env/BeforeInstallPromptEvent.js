// BeforeInstallPromptEvent对象

bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"] = function BeforeInstallPromptEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('BeforeInstallPromptEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"], "BeforeInstallPromptEvent");
bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].prototype, "platforms", {
  configurable: true,
  enumerable: true,
  get: {
    platforms() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].prototype, "BeforeInstallPromptEvent", "platforms_get", arguments);
    }
  }.platforms,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].prototype, "userChoice", {
  configurable: true,
  enumerable: true,
  get: {
    userChoice() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].prototype, "BeforeInstallPromptEvent", "userChoice_get", arguments);
    }
  }.userChoice,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].prototype, "prompt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    prompt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["BeforeInstallPromptEvent"].prototype, "BeforeInstallPromptEvent", "prompt", arguments);
    }
  }.prompt
});