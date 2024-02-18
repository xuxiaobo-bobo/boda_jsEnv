// PresentationConnectionCloseEvent对象

bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"] = function PresentationConnectionCloseEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PresentationConnectionCloseEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"], "PresentationConnectionCloseEvent");
bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"].prototype, "reason", {
  configurable: true,
  enumerable: true,
  get: {
    reason() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"].prototype, "PresentationConnectionCloseEvent", "reason_get", arguments);
    }
  }.reason,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PresentationConnectionCloseEvent"].prototype, "PresentationConnectionCloseEvent", "message_get", arguments);
    }
  }.message,
  set: undefined
});