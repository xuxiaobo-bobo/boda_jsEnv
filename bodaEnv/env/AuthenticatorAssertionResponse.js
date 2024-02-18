// AuthenticatorAssertionResponse对象

bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"] = function AuthenticatorAssertionResponse() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('AuthenticatorAssertionResponse 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"], "AuthenticatorAssertionResponse");
bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["AuthenticatorResponse"].prototype;
bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].__proto__ = bodaEnv.memory.globlProtoObj["AuthenticatorResponse"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].prototype, "authenticatorData", {
  configurable: true,
  enumerable: true,
  get: {
    authenticatorData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].prototype, "AuthenticatorAssertionResponse", "authenticatorData_get", arguments);
    }
  }.authenticatorData,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].prototype, "signature", {
  configurable: true,
  enumerable: true,
  get: {
    signature() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].prototype, "AuthenticatorAssertionResponse", "signature_get", arguments);
    }
  }.signature,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].prototype, "userHandle", {
  configurable: true,
  enumerable: true,
  get: {
    userHandle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["AuthenticatorAssertionResponse"].prototype, "AuthenticatorAssertionResponse", "userHandle_get", arguments);
    }
  }.userHandle,
  set: undefined
});