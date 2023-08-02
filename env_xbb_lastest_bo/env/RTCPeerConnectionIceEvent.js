// RTCPeerConnectionIceEvent对象

RTCPeerConnectionIceEvent = function RTCPeerConnectionIceEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCPeerConnectionIceEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCPeerConnectionIceEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCPeerConnectionIceEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCPeerConnectionIceEvent, "RTCPeerConnectionIceEvent");
RTCPeerConnectionIceEvent.prototype.__proto__ = Event.prototype;
RTCPeerConnectionIceEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(RTCPeerConnectionIceEvent.prototype, "candidate", {
  configurable: true,
  enumerable: true,
  get: function candidate() {
    return bodavm.toolsFunc.dispatch(this, RTCPeerConnectionIceEvent.prototype, "RTCPeerConnectionIceEvent", "candidate_get", arguments);
  },
  set: undefined
});