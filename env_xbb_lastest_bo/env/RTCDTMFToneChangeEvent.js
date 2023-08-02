// RTCDTMFToneChangeEvent对象

RTCDTMFToneChangeEvent = function RTCDTMFToneChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCDTMFToneChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'RTCDTMFToneChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCDTMFToneChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCDTMFToneChangeEvent, "RTCDTMFToneChangeEvent");
RTCDTMFToneChangeEvent.prototype.__proto__ = Event.prototype;
RTCDTMFToneChangeEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(RTCDTMFToneChangeEvent.prototype, "tone", {
  configurable: true,
  enumerable: true,
  get: function tone() {
    return bodavm.toolsFunc.dispatch(this, RTCDTMFToneChangeEvent.prototype, "RTCDTMFToneChangeEvent", "tone_get", arguments);
  },
  set: undefined
});