// HTMLTimeElement对象

HTMLTimeElement = function HTMLTimeElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTimeElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTimeElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTimeElement, "HTMLTimeElement");
HTMLTimeElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTimeElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTimeElement.prototype, "dateTime", {
  configurable: true,
  enumerable: true,
  get: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, HTMLTimeElement.prototype, "HTMLTimeElement", "dateTime_get", arguments);
  },
  set: function dateTime() {
    return bodavm.toolsFunc.dispatch(this, HTMLTimeElement.prototype, "HTMLTimeElement", "dateTime_set", arguments);
  }
});