// HTMLSlotElement对象

HTMLSlotElement = function HTMLSlotElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLSlotElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLSlotElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLSlotElement, "HTMLSlotElement");
HTMLSlotElement.prototype.__proto__ = HTMLElement.prototype;
HTMLSlotElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLSlotElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLSlotElement.prototype, "HTMLSlotElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLSlotElement.prototype, "HTMLSlotElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSlotElement.prototype, "assign", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function assign() {
    return bodavm.toolsFunc.dispatch(this, HTMLSlotElement.prototype, "HTMLSlotElement", "assign", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSlotElement.prototype, "assignedElements", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function assignedElements() {
    return bodavm.toolsFunc.dispatch(this, HTMLSlotElement.prototype, "HTMLSlotElement", "assignedElements", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSlotElement.prototype, "assignedNodes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function assignedNodes() {
    return bodavm.toolsFunc.dispatch(this, HTMLSlotElement.prototype, "HTMLSlotElement", "assignedNodes", arguments);
  }
});