// HTMLDataListElement对象

HTMLDataListElement = function HTMLDataListElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDataListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDataListElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDataListElement, "HTMLDataListElement");
HTMLDataListElement.prototype.__proto__ = HTMLElement.prototype;
HTMLDataListElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDataListElement.prototype, "options", {
  configurable: true,
  enumerable: true,
  get: function options() {
    return bodavm.toolsFunc.dispatch(this, HTMLDataListElement.prototype, "HTMLDataListElement", "options_get", arguments);
  },
  set: undefined
});