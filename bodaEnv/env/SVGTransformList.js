// SVGTransformList对象

bodaEnv.memory.globlProtoObj["SVGTransformList"] = function SVGTransformList() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGTransformList 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGTransformList"], "SVGTransformList");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "length", {
  configurable: true,
  enumerable: true,
  get: {
    length() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "length_get", arguments);
    }
  }.length,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: {
    numberOfItems() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "numberOfItems_get", arguments);
    }
  }.numberOfItems,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    appendItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "appendItem", arguments);
    }
  }.appendItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "consolidate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    consolidate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "consolidate", arguments);
    }
  }.consolidate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "createSVGTransformFromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGTransformFromMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "createSVGTransformFromMatrix", arguments);
    }
  }.createSVGTransformFromMatrix
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "getItem", arguments);
    }
  }.getItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    initialize() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "initialize", arguments);
    }
  }.initialize
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    insertItemBefore() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "insertItemBefore", arguments);
    }
  }.insertItemBefore
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    removeItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "removeItem", arguments);
    }
  }.removeItem
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    replaceItem() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGTransformList"].prototype, "SVGTransformList", "replaceItem", arguments);
    }
  }.replaceItem
});