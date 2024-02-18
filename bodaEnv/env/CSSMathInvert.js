// CSSMathInvert对象

bodaEnv.memory.globlProtoObj["CSSMathInvert"] = function CSSMathInvert() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathInvert 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathInvert"], "CSSMathInvert");
bodaEnv.memory.globlProtoObj["CSSMathInvert"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathInvert"].__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathInvert"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathInvert"].prototype, "CSSMathInvert", "value_get", arguments);
    }
  }.value,
  set: undefined
});