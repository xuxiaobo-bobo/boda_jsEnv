// SVGNumberList对象

SVGNumberList = function SVGNumberList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGNumberList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGNumberList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGNumberList, "SVGNumberList");
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "numberOfItems_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "appendItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "getItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "initialize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "insertItemBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "removeItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGNumberList.prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, SVGNumberList.prototype, "SVGNumberList", "replaceItem", arguments);
  }
});