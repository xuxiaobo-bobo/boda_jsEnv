// HTMLUListElement对象

HTMLUListElement = function HTMLUListElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLUListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLUListElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLUListElement, "HTMLUListElement");
HTMLUListElement.prototype.__proto__ = HTMLElement.prototype;
HTMLUListElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLUListElement.prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "compact_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLUListElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLUListElement.prototype, "HTMLUListElement", "type_set", arguments);
  }
});