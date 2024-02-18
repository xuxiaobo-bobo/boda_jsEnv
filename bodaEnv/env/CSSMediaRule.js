// CSSMediaRule对象

bodaEnv.memory.globlProtoObj["CSSMediaRule"] = function CSSMediaRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMediaRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMediaRule"], "CSSMediaRule");
bodaEnv.memory.globlProtoObj["CSSMediaRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSConditionRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSMediaRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSConditionRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMediaRule"].prototype, "media", {
  configurable: true,
  enumerable: true,
  get: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMediaRule"].prototype, "CSSMediaRule", "media_get", arguments);
    }
  }.media,
  set: {
    media() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMediaRule"].prototype, "CSSMediaRule", "media_set", arguments);
    }
  }.media
});