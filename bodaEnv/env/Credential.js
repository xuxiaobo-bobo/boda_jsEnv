// Credential对象

bodaEnv.memory.globlProtoObj["Credential"] = function Credential() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Credential 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Credential"], "Credential");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Credential"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Credential"].prototype, "Credential", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Credential"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Credential"].prototype, "Credential", "type_get", arguments);
    }
  }.type,
  set: undefined
});