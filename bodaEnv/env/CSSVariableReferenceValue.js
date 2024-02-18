// CSSVariableReferenceValue对象

bodaEnv.memory.globlProtoObj["CSSVariableReferenceValue"] = function CSSVariableReferenceValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSVariableReferenceValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSVariableReferenceValue"], "CSSVariableReferenceValue");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSVariableReferenceValue"].prototype, "variable", {
  configurable: true,
  enumerable: true,
  get: {
    variable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSVariableReferenceValue"].prototype, "CSSVariableReferenceValue", "variable_get", arguments);
    }
  }.variable,
  set: {
    variable() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSVariableReferenceValue"].prototype, "CSSVariableReferenceValue", "variable_set", arguments);
    }
  }.variable
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSVariableReferenceValue"].prototype, "fallback", {
  configurable: true,
  enumerable: true,
  get: {
    fallback() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSVariableReferenceValue"].prototype, "CSSVariableReferenceValue", "fallback_get", arguments);
    }
  }.fallback,
  set: undefined
});