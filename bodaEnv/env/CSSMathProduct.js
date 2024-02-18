// CSSMathProduct对象

bodaEnv.memory.globlProtoObj["CSSMathProduct"] = function CSSMathProduct() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathProduct 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathProduct"], "CSSMathProduct");
bodaEnv.memory.globlProtoObj["CSSMathProduct"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathProduct"].__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathProduct"].prototype, "values", {
  configurable: true,
  enumerable: true,
  get: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathProduct"].prototype, "CSSMathProduct", "values_get", arguments);
    }
  }.values,
  set: undefined
});