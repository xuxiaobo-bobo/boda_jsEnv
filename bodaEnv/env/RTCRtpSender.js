// RTCRtpSender对象

bodaEnv.memory.globlProtoObj["RTCRtpSender"] = function RTCRtpSender() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCRtpSender 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCRtpSender"], "RTCRtpSender");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"], "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCapabilities() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpTransceiver"], "RTCRtpSender", "getCapabilities", arguments);
    }
  }.getCapabilities
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "track", {
  configurable: true,
  enumerable: true,
  get: {
    track() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "track_get", arguments);
    }
  }.track,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "transport", {
  configurable: true,
  enumerable: true,
  get: {
    transport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "transport_get", arguments);
    }
  }.transport,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "rtcpTransport", {
  configurable: true,
  enumerable: true,
  get: {
    rtcpTransport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "rtcpTransport_get", arguments);
    }
  }.rtcpTransport,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "dtmf", {
  configurable: true,
  enumerable: true,
  get: {
    dtmf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "dtmf_get", arguments);
    }
  }.dtmf,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "createEncodedStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createEncodedStreams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "createEncodedStreams", arguments);
    }
  }.createEncodedStreams
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "getParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getParameters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "getParameters", arguments);
    }
  }.getParameters
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getStats() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "getStats", arguments);
    }
  }.getStats
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "replaceTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "replaceTrack", arguments);
    }
  }.replaceTrack
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "setParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setParameters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "setParameters", arguments);
    }
  }.setParameters
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "setStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setStreams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"].prototype, "RTCRtpSender", "setStreams", arguments);
    }
  }.setStreams
});