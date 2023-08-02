// HTMLTableCaptionElement对象

HTMLTableCaptionElement = function HTMLTableCaptionElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTableCaptionElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTableCaptionElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTableCaptionElement, "HTMLTableCaptionElement");
HTMLTableCaptionElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTableCaptionElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTableCaptionElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCaptionElement.prototype, "HTMLTableCaptionElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableCaptionElement.prototype, "HTMLTableCaptionElement", "align_set", arguments);
  }
});