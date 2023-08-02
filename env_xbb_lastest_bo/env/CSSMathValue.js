// CSSMathValue对象

CSSMathValue = function CSSMathValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathValue, "CSSMathValue");
CSSMathValue.prototype.__proto__ = CSSNumericValue.prototype;
CSSMathValue.__proto__ = CSSNumericValue;
bodavm.toolsFunc.defineProperty(CSSMathValue.prototype, "operator", {
  configurable: true,
  enumerable: true,
  get: function operator() {
    return bodavm.toolsFunc.dispatch(this, CSSMathValue.prototype, "CSSMathValue", "operator_get", arguments);
  },
  set: undefined
});