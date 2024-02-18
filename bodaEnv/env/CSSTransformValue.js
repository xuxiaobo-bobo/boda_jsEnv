// CSSTransformValue对象

bodaEnv.memory.globlProtoObj["CSSTransformValue"] = function CSSTransformValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CSSTransformValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CSSTransformValue"], "CSSTransformValue");
bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"].prototype;
bodaEnv.memory.globlProtoObj["CSSTransformValue"].__proto__ = bodaEnv.memory.globlProtoObj["CSSStyleValue"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "CSSTransformValue", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "CSSTransformValue", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "CSSTransformValue", "values", arguments);
    }
  }.values
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "CSSTransformValue", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "CSSTransformValue", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "is2D", {
  configurable: true,
  enumerable: true,
  get: {
    is2D() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "CSSTransformValue", "is2D_get", arguments);
    }
  }.is2D,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "toMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CSSTransformValue"].prototype, "CSSTransformValue", "toMatrix", arguments);
    }
  }.toMatrix
});