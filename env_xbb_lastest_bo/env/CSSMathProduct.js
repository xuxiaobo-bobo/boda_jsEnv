// CSSMathProduct对象

CSSMathProduct = function CSSMathProduct() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSMathProduct)) {
    return bodavm.toolsFunc.throwError("SyntaxError", "Failed to construct 'CSSMathProduct': Arguments can't be empty");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSMathProduct 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSMathProduct, "CSSMathProduct");
CSSMathProduct.prototype.__proto__ = CSSMathValue.prototype;
CSSMathProduct.__proto__ = CSSMathValue;
bodavm.toolsFunc.defineProperty(CSSMathProduct.prototype, "values", {
  configurable: true,
  enumerable: true,
  get: function values() {
    return bodavm.toolsFunc.dispatch(this, CSSMathProduct.prototype, "CSSMathProduct", "values_get", arguments);
  },
  set: undefined
});