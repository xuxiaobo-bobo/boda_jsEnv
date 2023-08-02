// RTCRtpReceiver对象

RTCRtpReceiver = function RTCRtpReceiver() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCRtpReceiver)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCRtpReceiver 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCRtpReceiver, "RTCRtpReceiver");
bodavm.toolsFunc.defineProperty(RTCRtpReceiver, "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver, "RTCRtpReceiver", "getCapabilities", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "track_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "transport", {
  configurable: true,
  enumerable: true,
  get: function transport() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "transport_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "rtcpTransport", {
  configurable: true,
  enumerable: true,
  get: function rtcpTransport() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "rtcpTransport_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "playoutDelayHint", {
  configurable: true,
  enumerable: true,
  get: function playoutDelayHint() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "playoutDelayHint_get", arguments);
  },
  set: function playoutDelayHint() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "playoutDelayHint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "createEncodedStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createEncodedStreams() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "createEncodedStreams", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "getContributingSources", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getContributingSources() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "getContributingSources", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "getParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameters() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "getParameters", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStats() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "getStats", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCRtpReceiver.prototype, "getSynchronizationSources", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSynchronizationSources() {
    return bodavm.toolsFunc.dispatch(this, RTCRtpReceiver.prototype, "RTCRtpReceiver", "getSynchronizationSources", arguments);
  }
});