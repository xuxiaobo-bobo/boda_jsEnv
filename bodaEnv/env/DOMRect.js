// DOMRect对象

bodaEnv.memory.globlProtoObj["DOMRect"] = function DOMRect() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('DOMRect 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["DOMRect"], "DOMRect");
bodaEnv.memory.globlProtoObj["DOMRect"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["DOMRectReadOnly"].prototype;
bodaEnv.memory.globlProtoObj["DOMRect"].__proto__ = bodaEnv.memory.globlProtoObj["DOMRectReadOnly"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRect"], "fromRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    fromRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRectList"], "DOMRect", "fromRect", arguments);
    }
  }.fromRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "x_get", arguments);
    }
  }.x,
  set: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "x_set", arguments);
    }
  }.x
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "y_get", arguments);
    }
  }.y,
  set: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "y_set", arguments);
    }
  }.y
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "width_get", arguments);
    }
  }.width,
  set: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "width_set", arguments);
    }
  }.width
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "height_get", arguments);
    }
  }.height,
  set: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["DOMRect"].prototype, "DOMRect", "height_set", arguments);
    }
  }.height
});