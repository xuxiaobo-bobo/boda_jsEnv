// HTMLMenuElement对象

HTMLMenuElement = function HTMLMenuElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLMenuElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLMenuElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLMenuElement, "HTMLMenuElement");
HTMLMenuElement.prototype.__proto__ = HTMLElement.prototype;
HTMLMenuElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMenuElement.prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLMenuElement.prototype, "HTMLMenuElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLMenuElement.prototype, "HTMLMenuElement", "compact_set", arguments);
  }
});