// RTCRtpReceiver对象

bodaEnv.memory.globlProtoObj["RTCRtpReceiver"] = function RTCRtpReceiver() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCRtpReceiver 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"], "RTCRtpReceiver");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"], "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCapabilities() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpSender"], "RTCRtpReceiver", "getCapabilities", arguments);
    }
  }.getCapabilities
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "track", {
  configurable: true,
  enumerable: true,
  get: {
    track() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "track_get", arguments);
    }
  }.track,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "transport", {
  configurable: true,
  enumerable: true,
  get: {
    transport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "transport_get", arguments);
    }
  }.transport,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "rtcpTransport", {
  configurable: true,
  enumerable: true,
  get: {
    rtcpTransport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "rtcpTransport_get", arguments);
    }
  }.rtcpTransport,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "playoutDelayHint", {
  configurable: true,
  enumerable: true,
  get: {
    playoutDelayHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "playoutDelayHint_get", arguments);
    }
  }.playoutDelayHint,
  set: {
    playoutDelayHint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "playoutDelayHint_set", arguments);
    }
  }.playoutDelayHint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "createEncodedStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createEncodedStreams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "createEncodedStreams", arguments);
    }
  }.createEncodedStreams
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "getContributingSources", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getContributingSources() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "getContributingSources", arguments);
    }
  }.getContributingSources
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "getParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getParameters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "getParameters", arguments);
    }
  }.getParameters
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getStats() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "getStats", arguments);
    }
  }.getStats
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "getSynchronizationSources", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSynchronizationSources() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCRtpReceiver"].prototype, "RTCRtpReceiver", "getSynchronizationSources", arguments);
    }
  }.getSynchronizationSources
});