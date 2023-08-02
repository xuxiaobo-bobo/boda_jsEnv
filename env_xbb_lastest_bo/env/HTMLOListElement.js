// HTMLOListElement对象

HTMLOListElement = function HTMLOListElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLOListElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLOListElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLOListElement, "HTMLOListElement");
HTMLOListElement.prototype.__proto__ = HTMLElement.prototype;
HTMLOListElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLOListElement.prototype, "reversed", {
  configurable: true,
  enumerable: true,
  get: function reversed() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "reversed_get", arguments);
  },
  set: function reversed() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "reversed_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOListElement.prototype, "start", {
  configurable: true,
  enumerable: true,
  get: function start() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "start_get", arguments);
  },
  set: function start() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "start_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOListElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLOListElement.prototype, "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, HTMLOListElement.prototype, "HTMLOListElement", "compact_set", arguments);
  }
});