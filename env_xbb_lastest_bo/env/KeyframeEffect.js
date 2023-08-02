// KeyframeEffect对象

KeyframeEffect = function KeyframeEffect() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof KeyframeEffect)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'KeyframeEffect': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('KeyframeEffect 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(KeyframeEffect, "KeyframeEffect");
KeyframeEffect.prototype.__proto__ = AnimationEffect.prototype;
KeyframeEffect.__proto__ = AnimationEffect;
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "target_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "pseudoElement", {
  configurable: true,
  enumerable: true,
  get: function pseudoElement() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "pseudoElement_get", arguments);
  },
  set: function pseudoElement() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "pseudoElement_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "composite", {
  configurable: true,
  enumerable: true,
  get: function composite() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "composite_get", arguments);
  },
  set: function composite() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "composite_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "getKeyframes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getKeyframes() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "getKeyframes", arguments);
  }
});
bodavm.toolsFunc.defineProperty(KeyframeEffect.prototype, "setKeyframes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setKeyframes() {
    return bodavm.toolsFunc.dispatch(this, KeyframeEffect.prototype, "KeyframeEffect", "setKeyframes", arguments);
  }
});