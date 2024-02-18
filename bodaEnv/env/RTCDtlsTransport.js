// RTCDtlsTransport对象

bodaEnv.memory.globlProtoObj["RTCDtlsTransport"] = function RTCDtlsTransport() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('RTCDtlsTransport 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["RTCDtlsTransport"], "RTCDtlsTransport");
bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "iceTransport", {
  configurable: true,
  enumerable: true,
  get: {
    iceTransport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "RTCDtlsTransport", "iceTransport_get", arguments);
    }
  }.iceTransport,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "state", {
  configurable: true,
  enumerable: true,
  get: {
    state() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "RTCDtlsTransport", "state_get", arguments);
    }
  }.state,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "RTCDtlsTransport", "onstatechange_get", arguments);
    }
  }.onstatechange,
  set: {
    onstatechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "RTCDtlsTransport", "onstatechange_set", arguments);
    }
  }.onstatechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "RTCDtlsTransport", "onerror_get", arguments);
    }
  }.onerror,
  set: {
    onerror() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "RTCDtlsTransport", "onerror_set", arguments);
    }
  }.onerror
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "getRemoteCertificates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getRemoteCertificates() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["RTCDtlsTransport"].prototype, "RTCDtlsTransport", "getRemoteCertificates", arguments);
    }
  }.getRemoteCertificates
});