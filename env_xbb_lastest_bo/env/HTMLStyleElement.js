// HTMLStyleElement对象

HTMLStyleElement = function HTMLStyleElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLStyleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLStyleElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLStyleElement, "HTMLStyleElement");
HTMLStyleElement.prototype.__proto__ = HTMLElement.prototype;
HTMLStyleElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "media_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "sheet_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLStyleElement.prototype, "blocking", {
  configurable: true,
  enumerable: true,
  get: function blocking() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "blocking_get", arguments);
  },
  set: function blocking() {
    return bodavm.toolsFunc.dispatch(this, HTMLStyleElement.prototype, "HTMLStyleElement", "blocking_set", arguments);
  }
});