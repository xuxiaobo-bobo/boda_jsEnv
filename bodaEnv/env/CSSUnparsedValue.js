// CSSUnparsedValue对象

bodaEnv.memory.globlProtoObj["CSSUnparsedValue"] = function CSSUnparsedValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSUnparsedValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSUnparsedValue"], "CSSUnparsedValue");
bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "CSSUnparsedValue", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "CSSUnparsedValue", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "CSSUnparsedValue", "values", arguments);
    }
  }.values
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "CSSUnparsedValue", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSUnparsedValue"].prototype, "CSSUnparsedValue", "length_get", arguments);
    }
  }.length,
  set: undefined
});