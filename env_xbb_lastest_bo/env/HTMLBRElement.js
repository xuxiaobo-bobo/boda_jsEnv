// HTMLBRElement对象

HTMLBRElement = function HTMLBRElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLBRElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLBRElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLBRElement, "HTMLBRElement");
HTMLBRElement.prototype.__proto__ = HTMLElement.prototype;
HTMLBRElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLBRElement.prototype, "clear", {
  configurable: true,
  enumerable: true,
  get: function clear() {
    return bodavm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_get", arguments);
  },
  set: function clear() {
    return bodavm.toolsFunc.dispatch(this, HTMLBRElement.prototype, "HTMLBRElement", "clear_set", arguments);
  }
});