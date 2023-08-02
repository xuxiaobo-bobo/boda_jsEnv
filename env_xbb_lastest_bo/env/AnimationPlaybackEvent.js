// AnimationPlaybackEvent对象

AnimationPlaybackEvent = function AnimationPlaybackEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AnimationPlaybackEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AnimationPlaybackEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AnimationPlaybackEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AnimationPlaybackEvent, "AnimationPlaybackEvent");
AnimationPlaybackEvent.prototype.__proto__ = Event.prototype;
AnimationPlaybackEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(AnimationPlaybackEvent.prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, AnimationPlaybackEvent.prototype, "AnimationPlaybackEvent", "currentTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AnimationPlaybackEvent.prototype, "timelineTime", {
  configurable: true,
  enumerable: true,
  get: function timelineTime() {
    return bodavm.toolsFunc.dispatch(this, AnimationPlaybackEvent.prototype, "AnimationPlaybackEvent", "timelineTime_get", arguments);
  },
  set: undefined
});