// MediaKeyMessageEvent对象

MediaKeyMessageEvent = function MediaKeyMessageEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaKeyMessageEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaKeyMessageEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaKeyMessageEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaKeyMessageEvent, "MediaKeyMessageEvent");
MediaKeyMessageEvent.prototype.__proto__ = Event.prototype;
MediaKeyMessageEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MediaKeyMessageEvent.prototype, "messageType", {
  configurable: true,
  enumerable: true,
  get: function messageType() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyMessageEvent.prototype, "MediaKeyMessageEvent", "messageType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaKeyMessageEvent.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, MediaKeyMessageEvent.prototype, "MediaKeyMessageEvent", "message_get", arguments);
  },
  set: undefined
});