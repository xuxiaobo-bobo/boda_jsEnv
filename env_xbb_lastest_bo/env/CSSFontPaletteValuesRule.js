// CSSFontPaletteValuesRule对象

CSSFontPaletteValuesRule = function CSSFontPaletteValuesRule() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CSSFontPaletteValuesRule)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CSSFontPaletteValuesRule 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CSSFontPaletteValuesRule, "CSSFontPaletteValuesRule");
CSSFontPaletteValuesRule.prototype.__proto__ = CSSRule.prototype;
CSSFontPaletteValuesRule.__proto__ = CSSRule;
bodavm.toolsFunc.defineProperty(CSSFontPaletteValuesRule.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, CSSFontPaletteValuesRule.prototype, "CSSFontPaletteValuesRule", "name_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSFontPaletteValuesRule.prototype, "fontFamily", {
  configurable: true,
  enumerable: true,
  get: function fontFamily() {
    return bodavm.toolsFunc.dispatch(this, CSSFontPaletteValuesRule.prototype, "CSSFontPaletteValuesRule", "fontFamily_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSFontPaletteValuesRule.prototype, "basePalette", {
  configurable: true,
  enumerable: true,
  get: function basePalette() {
    return bodavm.toolsFunc.dispatch(this, CSSFontPaletteValuesRule.prototype, "CSSFontPaletteValuesRule", "basePalette_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(CSSFontPaletteValuesRule.prototype, "overrideColors", {
  configurable: true,
  enumerable: true,
  get: function overrideColors() {
    return bodavm.toolsFunc.dispatch(this, CSSFontPaletteValuesRule.prototype, "CSSFontPaletteValuesRule", "overrideColors_get", arguments);
  },
  set: undefined
});