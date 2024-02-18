// CSSPropertyRule对象

bodaEnv.memory.globlProtoObj["CSSPropertyRule"] = function CSSPropertyRule() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSPropertyRule 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSPropertyRule"], "CSSPropertyRule");
bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"].prototype;
bodaEnv.memory.globlProtoObj["CSSPropertyRule"].__proto__ = bodaEnv.memory.globlProtoObj["CSSRule"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "name", {
  configurable: true,
  enumerable: true,
  get: {
    name() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "CSSPropertyRule", "name_get", arguments);
    }
  }.name,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "syntax", {
  configurable: true,
  enumerable: true,
  get: {
    syntax() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "CSSPropertyRule", "syntax_get", arguments);
    }
  }.syntax,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "inherits", {
  configurable: true,
  enumerable: true,
  get: {
    inherits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "CSSPropertyRule", "inherits_get", arguments);
    }
  }.inherits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "initialValue", {
  configurable: true,
  enumerable: true,
  get: {
    initialValue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPropertyRule"].prototype, "CSSPropertyRule", "initialValue_get", arguments);
    }
  }.initialValue,
  set: undefined
});