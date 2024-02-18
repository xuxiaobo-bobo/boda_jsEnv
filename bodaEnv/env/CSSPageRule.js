// CSSPageRule对象

bodaEnv.memory.globlProtoObj["CSSPageRule"] = function CSSPageRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSPageRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSPageRule"], "CSSPageRule");
bodaEnv.memory.globlProtoObj["CSSPageRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSPageRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPageRule"].prototype, "selectorText", {
  configurable: true,
  enumerable: true,
  get: {
    selectorText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPageRule"].prototype, "CSSPageRule", "selectorText_get", arguments);
    }
  }.selectorText,
  set: {
    selectorText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPageRule"].prototype, "CSSPageRule", "selectorText_set", arguments);
    }
  }.selectorText
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPageRule"].prototype, "style", {
  configurable: true,
  enumerable: true,
  get: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPageRule"].prototype, "CSSPageRule", "style_get", arguments);
    }
  }.style,
  set: {
    style() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPageRule"].prototype, "CSSPageRule", "style_set", arguments);
    }
  }.style
});