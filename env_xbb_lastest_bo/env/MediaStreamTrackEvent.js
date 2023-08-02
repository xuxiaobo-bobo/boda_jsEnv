// MediaStreamTrackEvent对象

MediaStreamTrackEvent = function MediaStreamTrackEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaStreamTrackEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStreamTrackEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStreamTrackEvent, "MediaStreamTrackEvent");
MediaStreamTrackEvent.prototype.__proto__ = Event.prototype;
MediaStreamTrackEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MediaStreamTrackEvent.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrackEvent.prototype, "MediaStreamTrackEvent", "track_get", arguments);
  },
  set: undefined
});