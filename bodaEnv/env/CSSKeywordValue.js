// CSSKeywordValue对象

bodaEnv.memory.globlProtoObj["CSSKeywordValue"] = function CSSKeywordValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSKeywordValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSKeywordValue"], "CSSKeywordValue");
bodaEnv.memory.globlProtoObj["CSSKeywordValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSKeywordValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSKeywordValue"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeywordValue"].prototype, "CSSKeywordValue", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSKeywordValue"].prototype, "CSSKeywordValue", "value_set", arguments);
    }
  }.value
});