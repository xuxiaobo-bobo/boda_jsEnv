// CSSSupportsRule对象

bodaEnv.memory.globlProtoObj["CSSSupportsRule"] = function CSSSupportsRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSSupportsRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSSupportsRule"], "CSSSupportsRule");
bodaEnv.memory.globlProtoObj["CSSSupportsRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSConditionRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSSupportsRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSConditionRule"];