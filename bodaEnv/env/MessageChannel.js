// MessageChannel对象

bodaEnv.memory.globlProtoObj["MessageChannel"] = function MessageChannel() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MessageChannel 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MessageChannel"], "MessageChannel");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageChannel"].prototype, "port1", {
  configurable: true,
  enumerable: true,
  get: {
    port1() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageChannel"].prototype, "MessageChannel", "port1_get", arguments);
    }
  }.port1,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MessageChannel"].prototype, "port2", {
  configurable: true,
  enumerable: true,
  get: {
    port2() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MessageChannel"].prototype, "MessageChannel", "port2_get", arguments);
    }
  }.port2,
  set: undefined
});