// SVGPointList对象

SVGPointList = function SVGPointList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGPointList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGPointList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGPointList, "SVGPointList");
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "numberOfItems_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "appendItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "getItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "initialize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "insertItemBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "removeItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGPointList.prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, SVGPointList.prototype, "SVGPointList", "replaceItem", arguments);
  }
});