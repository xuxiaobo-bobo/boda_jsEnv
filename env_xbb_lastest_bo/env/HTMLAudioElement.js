// HTMLAudioElement对象

HTMLAudioElement = function HTMLAudioElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLAudioElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLAudioElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLAudioElement, "HTMLAudioElement");
HTMLAudioElement.prototype.__proto__ = HTMLMediaElement.prototype;
HTMLAudioElement.__proto__ = HTMLMediaElement;