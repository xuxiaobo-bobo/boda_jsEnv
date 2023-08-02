// HTMLPreElement对象

HTMLPreElement = function HTMLPreElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLPreElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLPreElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLPreElement, "HTMLPreElement");
HTMLPreElement.prototype.__proto__ = HTMLElement.prototype;
HTMLPreElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLPreElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLPreElement.prototype, "HTMLPreElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLPreElement.prototype, "HTMLPreElement", "width_set", arguments);
  }
});