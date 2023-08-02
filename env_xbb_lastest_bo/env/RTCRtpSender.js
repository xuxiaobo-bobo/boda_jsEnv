// RTCRtpSender对象

RTCRtpSender = function RTCRtpSender() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCRtpSender)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCRtpSender 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCRtpSender, "RTCRtpSender");
bodavm.toolsFunc.defineProperty(RTCRtpReceiver, "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender, "RTCRtpSender", "getCapabilities", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "track_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "transport", {
  configurable: true,
  enumerable: true,
  get: function transport() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "transport_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "rtcpTransport", {
  configurable: true,
  enumerable: true,
  get: function rtcpTransport() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "rtcpTransport_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "dtmf", {
  configurable: true,
  enumerable: true,
  get: function dtmf() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "dtmf_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "createEncodedStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createEncodedStreams() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "createEncodedStreams", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "getParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameters() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "getParameters", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStats() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "getStats", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "replaceTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceTrack() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "replaceTrack", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "setParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setParameters() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "setParameters", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpSender.prototype, "setStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStreams() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpSender.prototype, "RTCRtpSender", "setStreams", arguments);
  }
});