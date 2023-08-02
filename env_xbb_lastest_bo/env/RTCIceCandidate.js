// RTCIceCandidate对象

RTCIceCandidate = function RTCIceCandidate() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCIceCandidate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCIceCandidate': sdpMid and sdpMLineIndex are both null.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCIceCandidate 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCIceCandidate, "RTCIceCandidate");
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "candidate", {
  configurable: true,
  enumerable: true,
  get: function candidate() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "candidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "sdpMid", {
  configurable: true,
  enumerable: true,
  get: function sdpMid() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "sdpMid_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "sdpMLineIndex", {
  configurable: true,
  enumerable: true,
  get: function sdpMLineIndex() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "sdpMLineIndex_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "foundation", {
  configurable: true,
  enumerable: true,
  get: function foundation() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "foundation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "component", {
  configurable: true,
  enumerable: true,
  get: function component() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "component_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "priority", {
  configurable: true,
  enumerable: true,
  get: function priority() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "priority_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "address", {
  configurable: true,
  enumerable: true,
  get: function address() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "address_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "protocol_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "port_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "tcpType", {
  configurable: true,
  enumerable: true,
  get: function tcpType() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "tcpType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "relatedAddress", {
  configurable: true,
  enumerable: true,
  get: function relatedAddress() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "relatedAddress_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "relatedPort", {
  configurable: true,
  enumerable: true,
  get: function relatedPort() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "relatedPort_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "usernameFragment", {
  configurable: true,
  enumerable: true,
  get: function usernameFragment() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "usernameFragment_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCIceCandidate.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, RTCIceCandidate.prototype, "RTCIceCandidate", "toJSON", arguments);
  }
});