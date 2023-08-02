// CSSFontFaceRule对象

CSSFontFaceRule = function CSSFontFaceRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSFontFaceRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSFontFaceRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSFontFaceRule, "CSSFontFaceRule");
CSSFontFaceRule.prototype.__proto__ = CSSRule.prototype;
CSSFontFaceRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSFontFaceRule.prototype, "style", {
  configurable: true,
  enumerable: true,
  get: function style() {
    return bodavm.toolsFunc.dispatch(this, CSSFontFaceRule.prototype, "CSSFontFaceRule", "style_get", arguments);
  },
  set: undefined
});