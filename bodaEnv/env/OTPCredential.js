// OTPCredential对象

bodaEnv.memory.globlProtoObj["OTPCredential"] = function OTPCredential() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('OTPCredential 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["OTPCredential"], "OTPCredential");
bodaEnv.memory.globlProtoObj["OTPCredential"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Credential"].prototype;
bodaEnv.memory.globlProtoObj["OTPCredential"].__proto__ = bodaEnv.memory.globlProtoObj["Credential"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["OTPCredential"].prototype, "code", {
  configurable: true,
  enumerable: true,
  get: {
    code() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["OTPCredential"].prototype, "OTPCredential", "code_get", arguments);
    }
  }.code,
  set: undefined
});