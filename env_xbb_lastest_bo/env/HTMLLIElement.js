// HTMLLIElement对象

HTMLLIElement = function HTMLLIElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLLIElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLLIElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLLIElement, "HTMLLIElement");
HTMLLIElement.prototype.__proto__ = HTMLElement.prototype;
HTMLLIElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLLIElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLIElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLLIElement.prototype, "HTMLLIElement", "type_set", arguments);
  }
});