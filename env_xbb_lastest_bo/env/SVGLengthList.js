// SVGLengthList对象

SVGLengthList = function SVGLengthList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGLengthList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGLengthList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGLengthList, "SVGLengthList");
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "numberOfItems", {
  configurable: true,
  enumerable: true,
  get: function numberOfItems() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "numberOfItems_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "appendItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendItem() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "appendItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clear() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "clear", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "getItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getItem() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "getItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "initialize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function initialize() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "initialize", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "insertItemBefore", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function insertItemBefore() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "insertItemBefore", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "removeItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeItem() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "removeItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGLengthList.prototype, "replaceItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replaceItem() {
    return bodavm.toolsFunc.dispatch(this, SVGLengthList.prototype, "SVGLengthList", "replaceItem", arguments);
  }
});