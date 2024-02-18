// IdentityCredential对象

bodaEnv.memory.globlProtoObj["IdentityCredential"] = function IdentityCredential() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IdentityCredential 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IdentityCredential"], "IdentityCredential");
bodaEnv.memory.globlProtoObj["IdentityCredential"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Credential"].prototype;
bodaEnv.memory.globlProtoObj["IdentityCredential"].__proto__ = bodaEnv.memory.globlProtoObj["Credential"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IdentityCredential"].prototype, "token", {
  configurable: true,
  enumerable: true,
  get: {
    token() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IdentityCredential"].prototype, "IdentityCredential", "token_get", arguments);
    }
  }.token,
  set: undefined
});