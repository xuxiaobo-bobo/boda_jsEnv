// CSSNumericValue对象

bodaEnv.memory.globlProtoObj["CSSNumericValue"] = function CSSNumericValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSNumericValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSNumericValue"], "CSSNumericValue");
bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSNumericValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"], "parse", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    parse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSPageRule"], "CSSNumericValue", "parse", arguments);
    }
  }.parse
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "div", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    div() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "div", arguments);
    }
  }.div
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "equals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    equals() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "equals", arguments);
    }
  }.equals
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "max", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    max() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "max", arguments);
    }
  }.max
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "min", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    min() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "min", arguments);
    }
  }.min
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "mul", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    mul() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "mul", arguments);
    }
  }.mul
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "sub", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sub() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "sub", arguments);
    }
  }.sub
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "to", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    to() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "to", arguments);
    }
  }.to
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "toSum", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toSum() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "toSum", arguments);
    }
  }.toSum
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "type", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSNumericValue"].prototype, "CSSNumericValue", "type", arguments);
    }
  }.type
});