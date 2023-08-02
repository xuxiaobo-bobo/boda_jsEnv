// HTMLHeadElement对象

HTMLHeadElement = function HTMLHeadElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLHeadElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLHeadElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLHeadElement, "HTMLHeadElement");
HTMLHeadElement.prototype.__proto__ = HTMLElement.prototype;
HTMLHeadElement.__proto__ = HTMLElement;