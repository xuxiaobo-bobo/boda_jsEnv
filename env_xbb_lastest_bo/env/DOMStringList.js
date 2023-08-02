// DOMStringList对象

DOMStringList = function DOMStringList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof DOMStringList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('DOMStringList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(DOMStringList, "DOMStringList");
bodavm.toolsFunc.defineProperty(DOMStringList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(DOMStringList.prototype, "contains", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function contains() {
    return bodavm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "contains", arguments);
  }
});
bodavm.toolsFunc.defineProperty(DOMStringList.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, DOMStringList.prototype, "DOMStringList", "item", arguments);
  }
});