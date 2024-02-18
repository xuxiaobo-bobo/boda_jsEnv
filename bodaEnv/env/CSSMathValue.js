// CSSMathValue对象

bodaEnv.memory.globlProtoObj["CSSMathValue"] = function CSSMathValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathValue"], "CSSMathValue");
bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSNumericValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype, "operator", {
  configurable: true,
  enumerable: true,
  get: {
    operator() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype, "CSSMathValue", "operator_get", arguments);
    }
  }.operator,
  set: undefined
});