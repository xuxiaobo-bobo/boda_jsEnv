// RTCRtpTransceiver对象

bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"] = function RTCRtpTransceiver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCRtpTransceiver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"], "RTCRtpTransceiver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "mid", {
  configurable: true,
  enumerable: true,
  get: {
    mid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "mid_get", arguments);
    }
  }.mid,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "sender", {
  configurable: true,
  enumerable: true,
  get: {
    sender() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "sender_get", arguments);
    }
  }.sender,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "receiver", {
  configurable: true,
  enumerable: true,
  get: {
    receiver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "receiver_get", arguments);
    }
  }.receiver,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "stopped", {
  configurable: true,
  enumerable: true,
  get: {
    stopped() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "stopped_get", arguments);
    }
  }.stopped,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "direction_get", arguments);
    }
  }.direction,
  set: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "direction_set", arguments);
    }
  }.direction
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "currentDirection", {
  configurable: true,
  enumerable: true,
  get: {
    currentDirection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "currentDirection_get", arguments);
    }
  }.currentDirection,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "setCodecPreferences", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCodecPreferences() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "setCodecPreferences", arguments);
    }
  }.setCodecPreferences
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    stop() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"].prototype, "RTCRtpTransceiver", "stop", arguments);
    }
  }.stop
});