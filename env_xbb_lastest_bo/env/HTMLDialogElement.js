// HTMLDialogElement对象

HTMLDialogElement = function HTMLDialogElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLDialogElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLDialogElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLDialogElement, "HTMLDialogElement");
HTMLDialogElement.prototype.__proto__ = HTMLElement.prototype;
HTMLDialogElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLDialogElement.prototype, "open", {
  configurable: true,
  enumerable: true,
  get: function open() {
    return bodavm.toolsFunc.dispatch(this, HTMLDialogElement.prototype, "HTMLDialogElement", "open_get", arguments);
  },
  set: function open() {
    return bodavm.toolsFunc.dispatch(this, HTMLDialogElement.prototype, "HTMLDialogElement", "open_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLDialogElement.prototype, "returnValue", {
  configurable: true,
  enumerable: true,
  get: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLDialogElement.prototype, "HTMLDialogElement", "returnValue_get", arguments);
  },
  set: function returnValue() {
    return bodavm.toolsFunc.dispatch(this, HTMLDialogElement.prototype, "HTMLDialogElement", "returnValue_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLDialogElement.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, HTMLDialogElement.prototype, "HTMLDialogElement", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLDialogElement.prototype, "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function show() {
    return bodavm.toolsFunc.dispatch(this, HTMLDialogElement.prototype, "HTMLDialogElement", "show", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLDialogElement.prototype, "showModal", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function showModal() {
    return bodavm.toolsFunc.dispatch(this, HTMLDialogElement.prototype, "HTMLDialogElement", "showModal", arguments);
  }
});