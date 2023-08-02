// HTMLHeadingElement对象

HTMLHeadingElement = function HTMLHeadingElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLHeadingElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLHeadingElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLHeadingElement, "HTMLHeadingElement");
HTMLHeadingElement.prototype.__proto__ = HTMLElement.prototype;
HTMLHeadingElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLHeadingElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLHeadingElement.prototype, "HTMLHeadingElement", "align_set", arguments);
  }
});