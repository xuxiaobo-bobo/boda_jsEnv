// MediaStreamEvent对象

MediaStreamEvent = function MediaStreamEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaStreamEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStreamEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStreamEvent, "MediaStreamEvent");
MediaStreamEvent.prototype.__proto__ = Event.prototype;
MediaStreamEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MediaStreamEvent.prototype, "stream", {
  configurable: true,
  enumerable: true,
  get: function stream() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamEvent.prototype, "MediaStreamEvent", "stream_get", arguments);
  },
  set: undefined
});