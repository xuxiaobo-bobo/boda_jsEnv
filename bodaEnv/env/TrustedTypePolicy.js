// TrustedTypePolicy对象

bodaEnv.memory.globlProtoObj["TrustedTypePolicy"] = function TrustedTypePolicy() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('TrustedTypePolicy 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["TrustedTypePolicy"], "TrustedTypePolicy");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "TrustedTypePolicy", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "createHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "TrustedTypePolicy", "createHTML", arguments);
    }
  }.createHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "createScript", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createScript() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "TrustedTypePolicy", "createScript", arguments);
    }
  }.createScript
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "createScriptURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createScriptURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["TrustedTypePolicy"].prototype, "TrustedTypePolicy", "createScriptURL", arguments);
    }
  }.createScriptURL
});