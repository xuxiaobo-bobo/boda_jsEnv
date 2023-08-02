// HTMLCollection对象

HTMLCollection = function HTMLCollection() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLCollection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLCollection 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLCollection, "HTMLCollection");
bodavm.toolsFunc.defineProperty(HTMLCollection.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollection", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLCollection.prototype, "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollection", "item", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLCollection.prototype, "namedItem", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function namedItem() {
    return bodavm.toolsFunc.dispatch(this, HTMLCollection.prototype, "HTMLCollection", "namedItem", arguments);
  }
});