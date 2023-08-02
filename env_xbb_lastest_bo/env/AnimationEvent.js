// AnimationEvent对象

AnimationEvent = function AnimationEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AnimationEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AnimationEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AnimationEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AnimationEvent, "AnimationEvent");
AnimationEvent.prototype.__proto__ = Event.prototype;
AnimationEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(AnimationEvent.prototype, "animationName", {
  configurable: true,
  enumerable: true,
  get: function animationName() {
    return bodavm.toolsFunc.dispatch(this, AnimationEvent.prototype, "AnimationEvent", "animationName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AnimationEvent.prototype, "elapsedTime", {
  configurable: true,
  enumerable: true,
  get: function elapsedTime() {
    return bodavm.toolsFunc.dispatch(this, AnimationEvent.prototype, "AnimationEvent", "elapsedTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AnimationEvent.prototype, "pseudoElement", {
  configurable: true,
  enumerable: true,
  get: function pseudoElement() {
    return bodavm.toolsFunc.dispatch(this, AnimationEvent.prototype, "AnimationEvent", "pseudoElement_get", arguments);
  },
  set: undefined
});