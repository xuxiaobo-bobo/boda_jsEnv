// AuthenticatorResponse对象

bodaEnv.memory.globlProtoObj["AuthenticatorResponse"] = function AuthenticatorResponse() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AuthenticatorResponse 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AuthenticatorResponse"], "AuthenticatorResponse");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorResponse"].prototype, "clientDataJSON", {
  configurable: true,
  enumerable: true,
  get: {
    clientDataJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorResponse"].prototype, "AuthenticatorResponse", "clientDataJSON_get", arguments);
    }
  }.clientDataJSON,
  set: undefined
});