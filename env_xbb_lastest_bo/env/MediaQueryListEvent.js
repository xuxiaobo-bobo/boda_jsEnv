// MediaQueryListEvent对象

MediaQueryListEvent = function MediaQueryListEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaQueryListEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaQueryListEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaQueryListEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaQueryListEvent, "MediaQueryListEvent");
MediaQueryListEvent.prototype.__proto__ = Event.prototype;
MediaQueryListEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(MediaQueryListEvent.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryListEvent.prototype, "MediaQueryListEvent", "media_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaQueryListEvent.prototype, "matches", {
  configurable: true,
  enumerable: true,
  get: function matches() {
    return bodavm.toolsFunc.dispatch(this, MediaQueryListEvent.prototype, "MediaQueryListEvent", "matches_get", arguments);
  },
  set: undefined
});