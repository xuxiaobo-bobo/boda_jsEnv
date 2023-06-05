// RTCRtpSender对象

bodavm.memory.globalobj['RTCRtpSender'] = function RTCRtpSender() {
  console.log_copy('RTCRtpSender 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RTCRtpSender)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RTCRtpSender'], "RTCRtpSender");
bodavm.toolsFunc.defineProperty('RTCRtpSender', "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].undefined, "RTCRtpSender", "getCapabilities", arguments);
  }
});
bodavm.toolsFunc.defineProperty('RTCRtpSender', "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "track_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "transport", {
  configurable: true,
  enumerable: true,
  get: function transport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "transport_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "rtcpTransport", {
  configurable: true,
  enumerable: true,
  get: function rtcpTransport() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "rtcpTransport_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "dtmf", {
  configurable: true,
  enumerable: true,
  get: function dtmf() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "dtmf_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "createEncodedStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createEncodedStreams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "createEncodedStreams", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "getParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getParameters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "getParameters", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "getStats", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStats() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "getStats", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "replaceTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "replaceTrack", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "setParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setParameters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "setParameters", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RTCRtpSender', "setStreams", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setStreams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RTCRtpSender'].prototype, "RTCRtpSender", "setStreams", arguments);
  }
}, 'prototype');