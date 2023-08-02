// HTMLOptGroupElement对象

HTMLOptGroupElement = function HTMLOptGroupElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLOptGroupElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLOptGroupElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLOptGroupElement, "HTMLOptGroupElement");
HTMLOptGroupElement.prototype.__proto__ = HTMLElement.prototype;
HTMLOptGroupElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLOptGroupElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOptGroupElement.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, HTMLOptGroupElement.prototype, "HTMLOptGroupElement", "label_set", arguments);
  }
});