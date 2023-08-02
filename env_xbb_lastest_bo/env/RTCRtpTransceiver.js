// RTCRtpTransceiver对象

RTCRtpTransceiver = function RTCRtpTransceiver() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCRtpTransceiver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCRtpTransceiver 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCRtpTransceiver, "RTCRtpTransceiver");
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "mid", {
  configurable: true,
  enumerable: true,
  get: function mid() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "mid_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "sender", {
  configurable: true,
  enumerable: true,
  get: function sender() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "sender_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "receiver", {
  configurable: true,
  enumerable: true,
  get: function receiver() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "receiver_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "stopped", {
  configurable: true,
  enumerable: true,
  get: function stopped() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "stopped_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "direction_get", arguments);
  },
  set: function direction() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "direction_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "currentDirection", {
  configurable: true,
  enumerable: true,
  get: function currentDirection() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "currentDirection_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "setCodecPreferences", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCodecPreferences() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "setCodecPreferences", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpTransceiver.prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpTransceiver.prototype, "RTCRtpTransceiver", "stop", arguments);
  }
});