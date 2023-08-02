// HTMLDivElement对象

HTMLDivElement = function HTMLDivElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDivElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDivElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDivElement, "HTMLDivElement");
HTMLDivElement.prototype.__proto__ = HTMLElement.prototype;
HTMLDivElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDivElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLDivElement.prototype, "HTMLDivElement", "align_set", arguments);
  }
});