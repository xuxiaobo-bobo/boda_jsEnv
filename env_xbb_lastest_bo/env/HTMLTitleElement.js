// HTMLTitleElement对象

HTMLTitleElement = function HTMLTitleElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTitleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTitleElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTitleElement, "HTMLTitleElement");
HTMLTitleElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTitleElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTitleElement.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLTitleElement.prototype, "HTMLTitleElement", "text_set", arguments);
  }
});