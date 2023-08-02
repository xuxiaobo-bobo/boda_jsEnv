// HTMLDetailsElement对象

HTMLDetailsElement = function HTMLDetailsElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDetailsElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDetailsElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDetailsElement, "HTMLDetailsElement");
HTMLDetailsElement.prototype.__proto__ = HTMLElement.prototype;
HTMLDetailsElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDetailsElement.prototype, "open", {
  configurable: true,
  enumerable: true,
  get: function open() {
    return bodavm.toolsFunc.dispatch(this, HTMLDetailsElement.prototype, "HTMLDetailsElement", "open_get", arguments);
  },
  set: function open() {
    return bodavm.toolsFunc.dispatch(this, HTMLDetailsElement.prototype, "HTMLDetailsElement", "open_set", arguments);
  }
});