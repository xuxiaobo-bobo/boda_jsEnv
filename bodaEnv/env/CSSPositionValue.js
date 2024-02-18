// CSSPositionValue对象

bodaEnv.memory.globlProtoObj["CSSPositionValue"] = function CSSPositionValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSPositionValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSPositionValue"], "CSSPositionValue");
bodaEnv.memory.globlProtoObj["CSSPositionValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSPositionValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPositionValue"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPositionValue"].prototype, "CSSPositionValue", "x_get", arguments);
    }
  }.x,
  set: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPositionValue"].prototype, "CSSPositionValue", "x_set", arguments);
    }
  }.x
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPositionValue"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPositionValue"].prototype, "CSSPositionValue", "y_get", arguments);
    }
  }.y,
  set: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPositionValue"].prototype, "CSSPositionValue", "y_set", arguments);
    }
  }.y
});