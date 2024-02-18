// MediaKeyMessageEvent对象

bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"] = function MediaKeyMessageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaKeyMessageEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"], "MediaKeyMessageEvent");
bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"].prototype, "messageType", {
  configurable: true,
  enumerable: true,
  get: {
    messageType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"].prototype, "MediaKeyMessageEvent", "messageType_get", arguments);
    }
  }.messageType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"].prototype, "message", {
  configurable: true,
  enumerable: true,
  get: {
    message() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaKeyMessageEvent"].prototype, "MediaKeyMessageEvent", "message_get", arguments);
    }
  }.message,
  set: undefined
});