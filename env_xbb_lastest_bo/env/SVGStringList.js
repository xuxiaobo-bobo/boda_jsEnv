// SVGStringList对象

SVGStringList = function SVGStringList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGStringList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGStringList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGStringList, "SVGStringList");
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "numberOfItems_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "appendItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "getItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "initialize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "insertItemBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "removeItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGStringList.prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, SVGStringList.prototype, "SVGStringList", "replaceItem", arguments);
  }
});