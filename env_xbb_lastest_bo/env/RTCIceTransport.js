// RTCIceTransport对象

RTCIceTransport = function RTCIceTransport() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCIceTransport)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCIceTransport 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCIceTransport, "RTCIceTransport");
RTCIceTransport.prototype.__proto__ = EventTarget.prototype;
RTCIceTransport.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "role", {
  configurable: true,
  enumerable: true,
  get: function role() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "role_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "state_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "gatheringState", {
  configurable: true,
  enumerable: true,
  get: function gatheringState() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "gatheringState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "onstatechange", {
  configurable: true,
  enumerable: true,
  get: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "onstatechange_get", arguments);
  },
  set: function onstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "onstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "ongatheringstatechange", {
  configurable: true,
  enumerable: true,
  get: function ongatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "ongatheringstatechange_get", arguments);
  },
  set: function ongatheringstatechange() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "ongatheringstatechange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "onselectedcandidatepairchange", {
  configurable: true,
  enumerable: true,
  get: function onselectedcandidatepairchange() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "onselectedcandidatepairchange_get", arguments);
  },
  set: function onselectedcandidatepairchange() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "onselectedcandidatepairchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "getLocalCandidates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLocalCandidates() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "getLocalCandidates", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "getLocalParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLocalParameters() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "getLocalParameters", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "getRemoteCandidates", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteCandidates() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "getRemoteCandidates", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "getRemoteParameters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getRemoteParameters() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "getRemoteParameters", arguments);
  }
});
bodavm.toolsFunc.defineProperty(RTCIceTransport.prototype, "getSelectedCandidatePair", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSelectedCandidatePair() {
    return bodavm.toolsFunc.dispatch(this, RTCIceTransport.prototype, "RTCIceTransport", "getSelectedCandidatePair", arguments);
  }
});