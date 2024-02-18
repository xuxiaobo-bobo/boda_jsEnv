// SVGPointList对象

bodaEnv.memory.globlProtoObj["SVGPointList"] = function SVGPointList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGPointList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGPointList"], "SVGPointList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfItems() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "numberOfItems_get", arguments);
    }
  }.numberOfItems,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "appendItem", arguments);
    }
  }.appendItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "getItem", arguments);
    }
  }.getItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initialize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "initialize", arguments);
    }
  }.initialize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertItemBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "insertItemBefore", arguments);
    }
  }.insertItemBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "removeItem", arguments);
    }
  }.removeItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPointList"].prototype, "SVGPointList", "replaceItem", arguments);
    }
  }.replaceItem
});