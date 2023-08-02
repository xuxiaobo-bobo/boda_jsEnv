// HTMLDataElement对象

HTMLDataElement = function HTMLDataElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDataElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDataElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDataElement, "HTMLDataElement");
HTMLDataElement.prototype.__proto__ = HTMLElement.prototype;
HTMLDataElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDataElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLDataElement.prototype, "HTMLDataElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLDataElement.prototype, "HTMLDataElement", "value_set", arguments);
  }
});