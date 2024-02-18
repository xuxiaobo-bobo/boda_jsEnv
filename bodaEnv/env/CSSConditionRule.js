// CSSConditionRule对象

bodaEnv.memory.globlProtoObj["CSSConditionRule"] = function CSSConditionRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSConditionRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSConditionRule"], "CSSConditionRule");
bodaEnv.memory.globlProtoObj["CSSConditionRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSGroupingRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSConditionRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSGroupingRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSConditionRule"].prototype, "conditionText", {
  configurable: true,
  enumerable: true,
  get: {
    conditionText() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSConditionRule"].prototype, "CSSConditionRule", "conditionText_get", arguments);
    }
  }.conditionText,
  set: undefined
});