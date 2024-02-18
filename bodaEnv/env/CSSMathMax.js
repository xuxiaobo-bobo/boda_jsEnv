// CSSMathMax对象

bodaEnv.memory.globlProtoObj["CSSMathMax"] = function CSSMathMax() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathMax 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathMax"], "CSSMathMax");
bodaEnv.memory.globlProtoObj["CSSMathMax"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathMax"].__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathMax"].prototype, "values", {
  configurable: true,
  enumerable: true,
  get: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathMax"].prototype, "CSSMathMax", "values_get", arguments);
    }
  }.values,
  set: undefined
});