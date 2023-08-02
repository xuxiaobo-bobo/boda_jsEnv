// HTMLUnknownElement对象

HTMLUnknownElement = function HTMLUnknownElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLUnknownElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLUnknownElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLUnknownElement, "HTMLUnknownElement");
HTMLUnknownElement.prototype.__proto__ = HTMLElement.prototype;
HTMLUnknownElement.__proto__ = HTMLElement;