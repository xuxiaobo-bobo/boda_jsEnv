// HTMLProgressElement对象

HTMLProgressElement = function HTMLProgressElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLProgressElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLProgressElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLProgressElement, "HTMLProgressElement");
HTMLProgressElement.prototype.__proto__ = HTMLElement.prototype;
HTMLProgressElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLProgressElement.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLProgressElement.prototype, "HTMLProgressElement", "value_get", arguments);
  },
  set: function value() {
    return bodavm.toolsFunc.dispatch(this, HTMLProgressElement.prototype, "HTMLProgressElement", "value_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLProgressElement.prototype, "max", {
  configurable: true,
  enumerable: true,
  get: function max() {
    return bodavm.toolsFunc.dispatch(this, HTMLProgressElement.prototype, "HTMLProgressElement", "max_get", arguments);
  },
  set: function max() {
    return bodavm.toolsFunc.dispatch(this, HTMLProgressElement.prototype, "HTMLProgressElement", "max_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLProgressElement.prototype, "position", {
  configurable: true,
  enumerable: true,
  get: function position() {
    return bodavm.toolsFunc.dispatch(this, HTMLProgressElement.prototype, "HTMLProgressElement", "position_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLProgressElement.prototype, "labels", {
  configurable: true,
  enumerable: true,
  get: function labels() {
    return bodavm.toolsFunc.dispatch(this, HTMLProgressElement.prototype, "HTMLProgressElement", "labels_get", arguments);
  },
  set: undefined
});