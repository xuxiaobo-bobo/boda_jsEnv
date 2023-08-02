// CSSMathNegate对象

CSSMathNegate = function CSSMathNegate() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathNegate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'CSSMathNegate': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathNegate 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathNegate, "CSSMathNegate");
CSSMathNegate.prototype.__proto__ = CSSMathValue.prototype;
CSSMathNegate.__proto__ = CSSMathValue;
bodavm.toolsFunc.defineProperty(CSSMathNegate.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, CSSMathNegate.prototype, "CSSMathNegate", "value_get", arguments);
  },
  set: undefined
});