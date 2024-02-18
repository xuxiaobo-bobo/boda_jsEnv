// CSSMathClamp对象

bodaEnv.memory.globlProtoObj["CSSMathClamp"] = function CSSMathClamp() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSMathClamp 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSMathClamp"], "CSSMathClamp");
bodaEnv.memory.globlProtoObj["CSSMathClamp"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSMathClamp"].__proto__ = bodaEnv.memory.globlProtoObj["CSSMathValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathClamp"].prototype, "lower", {
  configurable: true,
  enumerable: true,
  get: {
    lower() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathClamp"].prototype, "CSSMathClamp", "lower_get", arguments);
    }
  }.lower,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathClamp"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathClamp"].prototype, "CSSMathClamp", "value_get", arguments);
    }
  }.value,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSMathClamp"].prototype, "upper", {
  configurable: true,
  enumerable: true,
  get: {
    upper() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSMathClamp"].prototype, "CSSMathClamp", "upper_get", arguments);
    }
  }.upper,
  set: undefined
});