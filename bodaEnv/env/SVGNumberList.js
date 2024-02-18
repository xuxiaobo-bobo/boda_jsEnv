// SVGNumberList对象

bodaEnv.memory.globlProtoObj["SVGNumberList"] = function SVGNumberList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGNumberList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGNumberList"], "SVGNumberList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfItems() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "numberOfItems_get", arguments);
    }
  }.numberOfItems,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "appendItem", arguments);
    }
  }.appendItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "getItem", arguments);
    }
  }.getItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initialize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "initialize", arguments);
    }
  }.initialize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertItemBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "insertItemBefore", arguments);
    }
  }.insertItemBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "removeItem", arguments);
    }
  }.removeItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGNumberList"].prototype, "SVGNumberList", "replaceItem", arguments);
    }
  }.replaceItem
});