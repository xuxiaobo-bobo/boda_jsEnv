// HTMLSourceElement对象

HTMLSourceElement = function HTMLSourceElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLSourceElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLSourceElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLSourceElement, "HTMLSourceElement");
HTMLSourceElement.prototype.__proto__ = HTMLElement.prototype;
HTMLSourceElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLSourceElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSourceElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSourceElement.prototype, "srcset", {
  configurable: true,
  enumerable: true,
  get: function srcset() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "srcset_get", arguments);
  },
  set: function srcset() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "srcset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSourceElement.prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: function sizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "sizes_get", arguments);
  },
  set: function sizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "sizes_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSourceElement.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "media_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSourceElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLSourceElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLSourceElement.prototype, "HTMLSourceElement", "height_set", arguments);
  }
});