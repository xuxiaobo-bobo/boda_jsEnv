// HTMLOptionsCollection对象

HTMLOptionsCollection = function HTMLOptionsCollection() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLOptionsCollection)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLOptionsCollection 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLOptionsCollection, "HTMLOptionsCollection");
HTMLOptionsCollection.prototype.__proto__ = HTMLCollection.prototype;
HTMLOptionsCollection.__proto__ = HTMLCollection;
bodavm.toolsFunc.defineProperty(HTMLOptionsCollection.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionsCollection.prototype, "HTMLOptionsCollection", "length_get", arguments);
  },
  set: function length() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionsCollection.prototype, "HTMLOptionsCollection", "length_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionsCollection.prototype, "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionsCollection.prototype, "HTMLOptionsCollection", "selectedIndex_get", arguments);
  },
  set: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionsCollection.prototype, "HTMLOptionsCollection", "selectedIndex_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionsCollection.prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function add() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionsCollection.prototype, "HTMLOptionsCollection", "add", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptionsCollection.prototype, "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptionsCollection.prototype, "HTMLOptionsCollection", "remove", arguments);
  }
});