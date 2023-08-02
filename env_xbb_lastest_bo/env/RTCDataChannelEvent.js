// RTCDataChannelEvent对象

RTCDataChannelEvent = function RTCDataChannelEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCDataChannelEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCDataChannelEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCDataChannelEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCDataChannelEvent, "RTCDataChannelEvent");
RTCDataChannelEvent.prototype.__proto__ = Event.prototype;
RTCDataChannelEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(RTCDataChannelEvent.prototype, "channel", {
  configurable: true,
  enumerable: true,
  get: function channel() {
    return bodavm.toolsFunc.dispatch(this, RTCDataChannelEvent.prototype, "RTCDataChannelEvent", "channel_get", arguments);
  },
  set: undefined
});