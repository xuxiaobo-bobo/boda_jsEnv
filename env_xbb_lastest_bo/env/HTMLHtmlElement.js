// HTMLHtmlElement对象

HTMLHtmlElement = function HTMLHtmlElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLHtmlElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLHtmlElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLHtmlElement, "HTMLHtmlElement");
HTMLHtmlElement.prototype.__proto__ = HTMLElement.prototype;
HTMLHtmlElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLHtmlElement.prototype, "version", {
  configurable: true,
  enumerable: true,
  get: function version() {
    return bodavm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_get", arguments);
  },
  set: function version() {
    return bodavm.toolsFunc.dispatch(this, HTMLHtmlElement.prototype, "HTMLHtmlElement", "version_set", arguments);
  }
});