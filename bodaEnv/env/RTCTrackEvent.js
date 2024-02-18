// RTCTrackEvent对象

bodaEnv.memory.globlProtoObj["RTCTrackEvent"] = function RTCTrackEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCTrackEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCTrackEvent"], "RTCTrackEvent");
bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["RTCTrackEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "receiver", {
  configurable: true,
  enumerable: true,
  get: {
    receiver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "RTCTrackEvent", "receiver_get", arguments);
    }
  }.receiver,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "track", {
  configurable: true,
  enumerable: true,
  get: {
    track() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "RTCTrackEvent", "track_get", arguments);
    }
  }.track,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "streams", {
  configurable: true,
  enumerable: true,
  get: {
    streams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "RTCTrackEvent", "streams_get", arguments);
    }
  }.streams,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "transceiver", {
  configurable: true,
  enumerable: true,
  get: {
    transceiver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCTrackEvent"].prototype, "RTCTrackEvent", "transceiver_get", arguments);
    }
  }.transceiver,
  set: undefined
});