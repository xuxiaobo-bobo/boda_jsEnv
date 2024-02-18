// FederatedCredential对象

bodaEnv.memory.globlProtoObj["FederatedCredential"] = function FederatedCredential() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FederatedCredential 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FederatedCredential"], "FederatedCredential");
bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Credential"].prototype;
bodaEnv.memory.globlProtoObj["FederatedCredential"].__proto__ = bodaEnv.memory.globlProtoObj["Credential"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "provider", {
  configurable: true,
  enumerable: true,
  get: {
    provider() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "FederatedCredential", "provider_get", arguments);
    }
  }.provider,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "FederatedCredential", "protocol_get", arguments);
    }
  }.protocol,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "FederatedCredential", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "iconURL", {
  configurable: true,
  enumerable: true,
  get: {
    iconURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FederatedCredential"].prototype, "FederatedCredential", "iconURL_get", arguments);
    }
  }.iconURL,
  set: undefined
});