// RTCTrackEvent对象

RTCTrackEvent = function RTCTrackEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCTrackEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCTrackEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCTrackEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCTrackEvent, "RTCTrackEvent");
RTCTrackEvent.prototype.__proto__ = Event.prototype;
RTCTrackEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "receiver", {
  configurable: true,
  enumerable: true,
  get: function receiver() {
    return bodavm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "receiver_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "track_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "streams", {
  configurable: true,
  enumerable: true,
  get: function streams() {
    return bodavm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "streams_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCTrackEvent.prototype, "transceiver", {
  configurable: true,
  enumerable: true,
  get: function transceiver() {
    return bodavm.toolsFunc.dispatch(this, RTCTrackEvent.prototype, "RTCTrackEvent", "transceiver_get", arguments);
  },
  set: undefined
});