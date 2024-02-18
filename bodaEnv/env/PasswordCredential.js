// PasswordCredential对象

bodaEnv.memory.globlProtoObj["PasswordCredential"] = function PasswordCredential() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PasswordCredential 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PasswordCredential"], "PasswordCredential");
bodaEnv.memory.globlProtoObj["PasswordCredential"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Credential"].prototype;
bodaEnv.memory.globlProtoObj["PasswordCredential"].__proto__ = bodaEnv.memory.globlProtoObj["Credential"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PasswordCredential"].prototype, "password", {
  configurable: true,
  enumerable: true,
  get: {
    password() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PasswordCredential"].prototype, "PasswordCredential", "password_get", arguments);
    }
  }.password,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PasswordCredential"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PasswordCredential"].prototype, "PasswordCredential", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PasswordCredential"].prototype, "iconURL", {
  configurable: true,
  enumerable: true,
  get: {
    iconURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PasswordCredential"].prototype, "PasswordCredential", "iconURL_get", arguments);
    }
  }.iconURL,
  set: undefined
});