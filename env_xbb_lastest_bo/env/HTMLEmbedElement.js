// HTMLEmbedElement对象

HTMLEmbedElement = function HTMLEmbedElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLEmbedElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLEmbedElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLEmbedElement, "HTMLEmbedElement");
HTMLEmbedElement.prototype.__proto__ = HTMLElement.prototype;
HTMLEmbedElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLEmbedElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLEmbedElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLEmbedElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLEmbedElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLEmbedElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLEmbedElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLEmbedElement.prototype, "getSVGDocument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSVGDocument() {
    return bodavm.toolsFunc.dispatch(this, HTMLEmbedElement.prototype, "HTMLEmbedElement", "getSVGDocument", arguments);
  }
});