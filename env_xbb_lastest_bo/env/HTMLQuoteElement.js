// HTMLQuoteElement对象

HTMLQuoteElement = function HTMLQuoteElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLQuoteElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLQuoteElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLQuoteElement, "HTMLQuoteElement");
HTMLQuoteElement.prototype.__proto__ = HTMLElement.prototype;
HTMLQuoteElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLQuoteElement.prototype, "cite", {
  configurable: true,
  enumerable: true,
  get: function cite() {
    return bodavm.toolsFunc.dispatch(this, HTMLQuoteElement.prototype, "HTMLQuoteElement", "cite_get", arguments);
  },
  set: function cite() {
    return bodavm.toolsFunc.dispatch(this, HTMLQuoteElement.prototype, "HTMLQuoteElement", "cite_set", arguments);
  }
});