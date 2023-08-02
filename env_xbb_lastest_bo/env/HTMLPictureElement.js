// HTMLPictureElement对象

HTMLPictureElement = function HTMLPictureElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLPictureElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLPictureElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLPictureElement, "HTMLPictureElement");
HTMLPictureElement.prototype.__proto__ = HTMLElement.prototype;
HTMLPictureElement.__proto__ = HTMLElement;