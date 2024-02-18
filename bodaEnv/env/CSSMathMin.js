// CSSMathMin对象

bodaEnv.memory.globlProtoObj["CSSMathMin"] = function CSSMathMin() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathMin 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathMin"], "CSSMathMin");
bodaEnv.memory.globlProtoObj["CSSMathMin"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathMin"].__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathMin"].prototype, "values", {
  configurable: true,
  enumerable: true,
  get: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathMin"].prototype, "CSSMathMin", "values_get", arguments);
    }
  }.values,
  set: undefined
});