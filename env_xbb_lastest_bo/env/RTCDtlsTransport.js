// RTCDtlsTransport对象

RTCDtlsTransport = function RTCDtlsTransport() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCDtlsTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCDtlsTransport 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCDtlsTransport, "RTCDtlsTransport");
RTCDtlsTransport.prototype.__proto__ = EventTarget.prototype;
RTCDtlsTransport.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(RTCDtlsTransport.prototype, "iceTransport", {
  configurable: true,
  enumerable: true,
  get: function iceTransport() {
    return bodavm.toolsFunc.dispatch(this, RTCDtlsTransport.prototype, "RTCDtlsTransport", "iceTransport_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDtlsTransport.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, RTCDtlsTransport.prototype, "RTCDtlsTransport", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCDtlsTransport.prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCDtlsTransport.prototype, "RTCDtlsTransport", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCDtlsTransport.prototype, "RTCDtlsTransport", "onstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDtlsTransport.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, RTCDtlsTransport.prototype, "RTCDtlsTransport", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, RTCDtlsTransport.prototype, "RTCDtlsTransport", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCDtlsTransport.prototype, "getRemoteCertificates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteCertificates() {
    return bodavm.toolsFunc.dispatch(this, RTCDtlsTransport.prototype, "RTCDtlsTransport", "getRemoteCertificates", arguments);
  }
});