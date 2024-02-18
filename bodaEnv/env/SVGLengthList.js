// SVGLengthList对象

bodaEnv.memory.globlProtoObj["SVGLengthList"] = function SVGLengthList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGLengthList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGLengthList"], "SVGLengthList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfItems() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "numberOfItems_get", arguments);
    }
  }.numberOfItems,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "appendItem", arguments);
    }
  }.appendItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "getItem", arguments);
    }
  }.getItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initialize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "initialize", arguments);
    }
  }.initialize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertItemBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "insertItemBefore", arguments);
    }
  }.insertItemBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "removeItem", arguments);
    }
  }.removeItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLengthList"].prototype, "SVGLengthList", "replaceItem", arguments);
    }
  }.replaceItem
});