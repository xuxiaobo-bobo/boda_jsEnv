// HTMLModElement对象

HTMLModElement = function HTMLModElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLModElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLModElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLModElement, "HTMLModElement");
HTMLModElement.prototype.__proto__ = HTMLElement.prototype;
HTMLModElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLModElement.prototype, "cite", {
  configurable: true,
  enumerable: true,
  get: function cite() {
    return bodavm.toolsFunc.dispatch(this, HTMLModElement.prototype, "HTMLModElement", "cite_get", arguments);
  },
  set: function cite() {
    return bodavm.toolsFunc.dispatch(this, HTMLModElement.prototype, "HTMLModElement", "cite_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLModElement.prototype, "dateTime", {
  configurable: true,
  enumerable: true,
  get: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, HTMLModElement.prototype, "HTMLModElement", "dateTime_get", arguments);
  },
  set: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, HTMLModElement.prototype, "HTMLModElement", "dateTime_set", arguments);
  }
});