// HTMLDListElement对象

HTMLDListElement = function HTMLDListElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDListElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDListElement, "HTMLDListElement");
HTMLDListElement.prototype.__proto__ = HTMLElement.prototype;
HTMLDListElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDListElement.prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLDListElement.prototype, "HTMLDListElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLDListElement.prototype, "HTMLDListElement", "compact_set", arguments);
  }
});