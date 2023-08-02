// TrackEvent对象

TrackEvent = function TrackEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof TrackEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TrackEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('TrackEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(TrackEvent, "TrackEvent");
TrackEvent.prototype.__proto__ = Event.prototype;
TrackEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(TrackEvent.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, TrackEvent.prototype, "TrackEvent", "track_get", arguments);
  },
  set: undefined
});