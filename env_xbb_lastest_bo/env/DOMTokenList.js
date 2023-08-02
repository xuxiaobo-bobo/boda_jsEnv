// DOMTokenList对象

DOMTokenList = function DOMTokenList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DOMTokenList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMTokenList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMTokenList, "DOMTokenList");
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "values", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function contains() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "contains", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "remove", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "replace", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function replace() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "replace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "supports", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function supports() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "supports", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "toggle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toggle() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "toggle", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMTokenList.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, DOMTokenList.prototype, "DOMTokenList", "toString", arguments);
  }
});