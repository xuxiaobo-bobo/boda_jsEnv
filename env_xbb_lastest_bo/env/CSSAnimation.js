// CSSAnimation对象

CSSAnimation = function CSSAnimation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSAnimation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSAnimation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSAnimation, "CSSAnimation");
CSSAnimation.prototype.__proto__ = Animation.prototype;
CSSAnimation.__proto__ = Animation;
bodavm.toolsFunc.defineProperty(CSSAnimation.prototype, "animationName", {
  configurable: true,
  enumerable: true,
  get: function animationName() {
    return bodavm.toolsFunc.dispatch(this, CSSAnimation.prototype, "CSSAnimation", "animationName_get", arguments);
  },
  set: undefined
});