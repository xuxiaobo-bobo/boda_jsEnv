// HTMLSpanElement对象

HTMLSpanElement = function HTMLSpanElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLSpanElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLSpanElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLSpanElement, "HTMLSpanElement");
HTMLSpanElement.prototype.__proto__ = HTMLElement.prototype;
HTMLSpanElement.__proto__ = HTMLElement;