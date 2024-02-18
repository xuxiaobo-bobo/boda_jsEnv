// RTCDataChannelEvent对象

bodaEnv.memory.globlProtoObj["RTCDataChannelEvent"] = function RTCDataChannelEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCDataChannelEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCDataChannelEvent"], "RTCDataChannelEvent");
bodaEnv.memory.globlProtoObj["RTCDataChannelEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["RTCDataChannelEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDataChannelEvent"].prototype, "channel", {
  configurable: true,
  enumerable: true,
  get: {
    channel() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDataChannelEvent"].prototype, "RTCDataChannelEvent", "channel_get", arguments);
    }
  }.channel,
  set: undefined
});