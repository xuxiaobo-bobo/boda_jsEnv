// NamedNodeMap对象

NamedNodeMap = function NamedNodeMap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NamedNodeMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NamedNodeMap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NamedNodeMap, "NamedNodeMap");
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "getNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNamedItem() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "getNamedItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "getNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getNamedItemNS() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "getNamedItemNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "removeNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeNamedItem() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "removeNamedItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "removeNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeNamedItemNS() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "removeNamedItemNS", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "setNamedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setNamedItem() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "setNamedItem", arguments);
  }
});
bodavm.toolsFunc.defineProperty(NamedNodeMap.prototype, "setNamedItemNS", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setNamedItemNS() {
    return bodavm.toolsFunc.dispatch(this, NamedNodeMap.prototype, "NamedNodeMap", "setNamedItemNS", arguments);
  }
});