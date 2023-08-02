// CSSMathSum对象

CSSMathSum = function CSSMathSum() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathSum)) {
    return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathSum': Arguments can't be empty");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathSum 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathSum, "CSSMathSum");
CSSMathSum.prototype.__proto__ = CSSMathValue.prototype;
CSSMathSum.__proto__ = CSSMathValue;
bodavm.toolsFunc.defineProperty(CSSMathSum.prototype, "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, CSSMathSum.prototype, "CSSMathSum", "values_get", arguments);
  },
  set: undefined
});