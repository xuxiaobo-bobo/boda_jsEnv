// CSSMathSum对象

bodaEnv.memory.globlProtoObj["CSSMathSum"] = function CSSMathSum() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathSum 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathSum"], "CSSMathSum");
bodaEnv.memory.globlProtoObj["CSSMathSum"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathSum"].__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathSum"].prototype, "values", {
  configurable: true,
  enumerable: true,
  get: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathSum"].prototype, "CSSMathSum", "values_get", arguments);
    }
  }.values,
  set: undefined
});