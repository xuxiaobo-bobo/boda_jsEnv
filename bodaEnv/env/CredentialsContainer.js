// CredentialsContainer对象

bodaEnv.memory.globlProtoObj["CredentialsContainer"] = function CredentialsContainer() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CredentialsContainer 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CredentialsContainer"], "CredentialsContainer");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "create", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    create() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "CredentialsContainer", "create", arguments);
    }
  }.create
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "CredentialsContainer", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "preventSilentAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    preventSilentAccess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "CredentialsContainer", "preventSilentAccess", arguments);
    }
  }.preventSilentAccess
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "store", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    store() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CredentialsContainer"].prototype, "CredentialsContainer", "store", arguments);
    }
  }.store
});