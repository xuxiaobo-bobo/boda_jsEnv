// DOMRectReadOnly对象

bodaEnv.memory.globlProtoObj["DOMRectReadOnly"] = function DOMRectReadOnly() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMRectReadOnly 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"], "DOMRectReadOnly");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"], "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMStringList"], "DOMRectReadOnly", "fromRect", arguments);
    }
  }.fromRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "top", {
  configurable: true,
  enumerable: true,
  get: {
    top() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "top_get", arguments);
    }
  }.top,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "right", {
  configurable: true,
  enumerable: true,
  get: {
    right() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "right_get", arguments);
    }
  }.right,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "bottom", {
  configurable: true,
  enumerable: true,
  get: {
    bottom() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "bottom_get", arguments);
    }
  }.bottom,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "left", {
  configurable: true,
  enumerable: true,
  get: {
    left() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "left_get", arguments);
    }
  }.left,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype, "DOMRectReadOnly", "toJSON", arguments);
    }
  }.toJSON
});