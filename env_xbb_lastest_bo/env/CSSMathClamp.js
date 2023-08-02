// CSSMathClamp对象

CSSMathClamp = function CSSMathClamp() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathClamp)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathClamp': 3 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathClamp 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathClamp, "CSSMathClamp");
CSSMathClamp.prototype.__proto__ = CSSMathValue.prototype;
CSSMathClamp.__proto__ = CSSMathValue;
bodavm.toolsFunc.defineProperty(CSSMathClamp.prototype, "lower", {
  configurable: true,
  enumerable: true,
  get: function lower() {
    return bodavm.toolsFunc.dispatch(this, CSSMathClamp.prototype, "CSSMathClamp", "lower_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSMathClamp.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, CSSMathClamp.prototype, "CSSMathClamp", "value_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSMathClamp.prototype, "upper", {
  configurable: true,
  enumerable: true,
  get: function upper() {
    return bodavm.toolsFunc.dispatch(this, CSSMathClamp.prototype, "CSSMathClamp", "upper_get", arguments);
  },
  set: undefined
});