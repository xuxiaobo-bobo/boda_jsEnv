// SVGStringList对象

bodaEnv.memory.globlProtoObj["SVGStringList"] = function SVGStringList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGStringList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGStringList"], "SVGStringList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfItems() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "numberOfItems_get", arguments);
    }
  }.numberOfItems,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "appendItem", arguments);
    }
  }.appendItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "getItem", arguments);
    }
  }.getItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initialize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "initialize", arguments);
    }
  }.initialize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertItemBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "insertItemBefore", arguments);
    }
  }.insertItemBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "removeItem", arguments);
    }
  }.removeItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGStringList"].prototype, "SVGStringList", "replaceItem", arguments);
    }
  }.replaceItem
});