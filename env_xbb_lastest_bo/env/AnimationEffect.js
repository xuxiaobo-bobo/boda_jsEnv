// AnimationEffect对象

AnimationEffect = function AnimationEffect() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AnimationEffect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AnimationEffect 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AnimationEffect, "AnimationEffect");
bodavm.toolsFunc.defineProperty(AnimationEffect.prototype, "getComputedTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getComputedTiming() {
    return bodavm.toolsFunc.dispatch(this, AnimationEffect.prototype, "AnimationEffect", "getComputedTiming", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnimationEffect.prototype, "getTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTiming() {
    return bodavm.toolsFunc.dispatch(this, AnimationEffect.prototype, "AnimationEffect", "getTiming", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AnimationEffect.prototype, "updateTiming", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateTiming() {
    return bodavm.toolsFunc.dispatch(this, AnimationEffect.prototype, "AnimationEffect", "updateTiming", arguments);
  }
});