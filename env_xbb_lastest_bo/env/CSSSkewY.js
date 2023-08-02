// CSSSkewY对象

CSSSkewY = function CSSSkewY() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSSkewY)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSSkewY': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSSkewY 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSSkewY, "CSSSkewY");
CSSSkewY.prototype.__proto__ = CSSTransformComponent.prototype;
CSSSkewY.__proto__ = CSSTransformComponent;
bodavm.toolsFunc.defineProperty(CSSSkewY.prototype, "ay", {
  configurable: true,
  enumerable: true,
  get: function ay() {
    return bodavm.toolsFunc.dispatch(this, CSSSkewY.prototype, "CSSSkewY", "ay_get", arguments);
  },
  set: function ay() {
    return bodavm.toolsFunc.dispatch(this, CSSSkewY.prototype, "CSSSkewY", "ay_set", arguments);
  }
});