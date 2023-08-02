// RTCPeerConnectionIceErrorEvent对象

RTCPeerConnectionIceErrorEvent = function RTCPeerConnectionIceErrorEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCPeerConnectionIceErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCPeerConnectionIceErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCPeerConnectionIceErrorEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCPeerConnectionIceErrorEvent, "RTCPeerConnectionIceErrorEvent");
RTCPeerConnectionIceErrorEvent.prototype.__proto__ = Event.prototype;
RTCPeerConnectionIceErrorEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(RTCPeerConnectionIceErrorEvent.prototype, "address", {
  configurable: true,
  enumerable: true,
  get: function address() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnectionIceErrorEvent.prototype, "RTCPeerConnectionIceErrorEvent", "address_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnectionIceErrorEvent.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnectionIceErrorEvent.prototype, "RTCPeerConnectionIceErrorEvent", "port_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnectionIceErrorEvent.prototype, "hostCandidate", {
  configurable: true,
  enumerable: true,
  get: function hostCandidate() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnectionIceErrorEvent.prototype, "RTCPeerConnectionIceErrorEvent", "hostCandidate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnectionIceErrorEvent.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnectionIceErrorEvent.prototype, "RTCPeerConnectionIceErrorEvent", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnectionIceErrorEvent.prototype, "errorCode", {
  configurable: true,
  enumerable: true,
  get: function errorCode() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnectionIceErrorEvent.prototype, "RTCPeerConnectionIceErrorEvent", "errorCode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCPeerConnectionIceErrorEvent.prototype, "errorText", {
  configurable: true,
  enumerable: true,
  get: function errorText() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnectionIceErrorEvent.prototype, "RTCPeerConnectionIceErrorEvent", "errorText_get", arguments);
  },
  set: undefined
});