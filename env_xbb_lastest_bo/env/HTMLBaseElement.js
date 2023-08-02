// HTMLBaseElement对象

HTMLBaseElement = function HTMLBaseElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLBaseElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLBaseElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLBaseElement, "HTMLBaseElement");
HTMLBaseElement.prototype.__proto__ = HTMLElement.prototype;
HTMLBaseElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLBaseElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "href_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLBaseElement.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLBaseElement.prototype, "HTMLBaseElement", "target_set", arguments);
  }
});