// HTMLParagraphElement对象

HTMLParagraphElement = function HTMLParagraphElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLParagraphElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLParagraphElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLParagraphElement, "HTMLParagraphElement");
HTMLParagraphElement.prototype.__proto__ = HTMLElement.prototype;
HTMLParagraphElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLParagraphElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLParagraphElement.prototype, "HTMLParagraphElement", "align_set", arguments);
  }
});