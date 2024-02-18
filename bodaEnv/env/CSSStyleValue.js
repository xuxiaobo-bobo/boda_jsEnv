// CSSStyleValue对象

bodaEnv.memory.globlProtoObj["CSSStyleValue"] = function CSSStyleValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSStyleValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSStyleValue"], "CSSStyleValue");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleValue"], "parse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    parse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformComponent"], "CSSStyleValue", "parse", arguments);
    }
  }.parse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleValue"], "parseAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    parseAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformComponent"], "CSSStyleValue", "parseAll", arguments);
    }
  }.parseAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype, "CSSStyleValue", "toString", arguments);
    }
  }.toString
});