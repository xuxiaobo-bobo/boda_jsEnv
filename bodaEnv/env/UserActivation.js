// UserActivation对象

bodaEnv.memory.globlProtoObj["UserActivation"] = function UserActivation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('UserActivation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["UserActivation"], "UserActivation");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["UserActivation"].prototype, "hasBeenActive", {
  configurable: true,
  enumerable: true,
  get: {
    hasBeenActive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["UserActivation"].prototype, "UserActivation", "hasBeenActive_get", arguments);
    }
  }.hasBeenActive,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["UserActivation"].prototype, "isActive", {
  configurable: true,
  enumerable: true,
  get: {
    isActive() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["UserActivation"].prototype, "UserActivation", "isActive_get", arguments);
    }
  }.isActive,
  set: undefined
});