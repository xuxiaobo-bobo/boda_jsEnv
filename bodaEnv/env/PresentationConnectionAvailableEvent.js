// PresentationConnectionAvailableEvent对象

bodaEnv.memory.globlProtoObj["PresentationConnectionAvailableEvent"] = function PresentationConnectionAvailableEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PresentationConnectionAvailableEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PresentationConnectionAvailableEvent"], "PresentationConnectionAvailableEvent");
bodaEnv.memory.globlProtoObj["PresentationConnectionAvailableEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["PresentationConnectionAvailableEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnectionAvailableEvent"].prototype, "connection", {
  configurable: true,
  enumerable: true,
  get: {
    connection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnectionAvailableEvent"].prototype, "PresentationConnectionAvailableEvent", "connection_get", arguments);
    }
  }.connection,
  set: undefined
});