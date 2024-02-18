// CSSMathNegate对象

bodaEnv.memory.globlProtoObj["CSSMathNegate"] = function CSSMathNegate() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathNegate 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathNegate"], "CSSMathNegate");
bodaEnv.memory.globlProtoObj["CSSMathNegate"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathNegate"].__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathNegate"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathNegate"].prototype, "CSSMathNegate", "value_get", arguments);
    }
  }.value,
  set: undefined
});