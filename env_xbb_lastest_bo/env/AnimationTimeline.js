// AnimationTimeline对象

AnimationTimeline = function AnimationTimeline() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AnimationTimeline)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AnimationTimeline 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AnimationTimeline, "AnimationTimeline");
bodavm.toolsFunc.defineProperty(AnimationTimeline.prototype, "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, AnimationTimeline.prototype, "AnimationTimeline", "currentTime_get", arguments);
  },
  set: undefined
});