// CSSImportRule对象

bodaEnv.memory.globlProtoObj["CSSImportRule"] = function CSSImportRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSImportRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSImportRule"], "CSSImportRule");
bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSImportRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "CSSImportRule", "href_get", arguments);
    }
  }.href,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "CSSImportRule", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "CSSImportRule", "media_set", arguments);
    }
  }.media
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "styleSheet", {
  configurable: true,
  enumerable: true,
  get: {
    styleSheet() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "CSSImportRule", "styleSheet_get", arguments);
    }
  }.styleSheet,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "layerName", {
  configurable: true,
  enumerable: true,
  get: {
    layerName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSImportRule"].prototype, "CSSImportRule", "layerName_get", arguments);
    }
  }.layerName,
  set: undefined
});