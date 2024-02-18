// CSSUnitValue对象

bodaEnv.memory.globlProtoObj["CSSUnitValue"] = function CSSUnitValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSUnitValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSUnitValue"], "CSSUnitValue");
bodaEnv.memory.globlProtoObj["CSSUnitValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSUnitValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSNumericValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSUnitValue"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnitValue"].prototype, "CSSUnitValue", "value_get", arguments);
    }
  }.value,
  set: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnitValue"].prototype, "CSSUnitValue", "value_set", arguments);
    }
  }.value
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSUnitValue"].prototype, "unit", {
  configurable: true,
  enumerable: true,
  get: {
    unit() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnitValue"].prototype, "CSSUnitValue", "unit_get", arguments);
    }
  }.unit,
  set: undefined
});