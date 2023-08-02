// SVGTransformList对象

SVGTransformList = function SVGTransformList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGTransformList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGTransformList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGTransformList, "SVGTransformList");
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "numberOfItems_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "appendItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "consolidate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function consolidate() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "consolidate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "createSVGTransformFromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGTransformFromMatrix() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "createSVGTransformFromMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "getItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "initialize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "insertItemBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "removeItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGTransformList.prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, SVGTransformList.prototype, "SVGTransformList", "replaceItem", arguments);
  }
});