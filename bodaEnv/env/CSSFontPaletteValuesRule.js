// CSSFontPaletteValuesRule对象

bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"] = function CSSFontPaletteValuesRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSFontPaletteValuesRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"], "CSSFontPaletteValuesRule");
bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "CSSFontPaletteValuesRule", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "fontFamily", {
  configurable: true,
  enumerable: true,
  get: {
    fontFamily() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "CSSFontPaletteValuesRule", "fontFamily_get", arguments);
    }
  }.fontFamily,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "basePalette", {
  configurable: true,
  enumerable: true,
  get: {
    basePalette() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "CSSFontPaletteValuesRule", "basePalette_get", arguments);
    }
  }.basePalette,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "overrideColors", {
  configurable: true,
  enumerable: true,
  get: {
    overrideColors() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSFontPaletteValuesRule"].prototype, "CSSFontPaletteValuesRule", "overrideColors_get", arguments);
    }
  }.overrideColors,
  set: undefined
});