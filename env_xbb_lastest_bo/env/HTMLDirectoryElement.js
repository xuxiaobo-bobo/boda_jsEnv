// HTMLDirectoryElement对象

HTMLDirectoryElement = function HTMLDirectoryElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDirectoryElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDirectoryElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDirectoryElement, "HTMLDirectoryElement");
HTMLDirectoryElement.prototype.__proto__ = HTMLElement.prototype;
HTMLDirectoryElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDirectoryElement.prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLDirectoryElement.prototype, "HTMLDirectoryElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLDirectoryElement.prototype, "HTMLDirectoryElement", "compact_set", arguments);
  }
});