// CSSKeyframeRule对象

bodaEnv.memory.globlProtoObj["CSSKeyframeRule"] = function CSSKeyframeRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSKeyframeRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSKeyframeRule"], "CSSKeyframeRule");
bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].prototype, "keyText", {
  configurable: true,
  enumerable: true,
  get: {
    keyText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].prototype, "CSSKeyframeRule", "keyText_get", arguments);
    }
  }.keyText,
  set: {
    keyText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].prototype, "CSSKeyframeRule", "keyText_set", arguments);
    }
  }.keyText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].prototype, "style", {
  configurable: true,
  enumerable: true,
  get: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].prototype, "CSSKeyframeRule", "style_get", arguments);
    }
  }.style,
  set: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeyframeRule"].prototype, "CSSKeyframeRule", "style_set", arguments);
    }
  }.style
});