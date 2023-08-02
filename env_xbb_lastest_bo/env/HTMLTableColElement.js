// HTMLTableColElement对象

HTMLTableColElement = function HTMLTableColElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTableColElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTableColElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTableColElement, "HTMLTableColElement");
HTMLTableColElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTableColElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTableColElement.prototype, "span", {
  configurable: true,
  enumerable: true,
  get: function span() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "span_get", arguments);
  },
  set: function span() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "span_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableColElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableColElement.prototype, "ch", {
  configurable: true,
  enumerable: true,
  get: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "ch_get", arguments);
  },
  set: function ch() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "ch_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableColElement.prototype, "chOff", {
  configurable: true,
  enumerable: true,
  get: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "chOff_get", arguments);
  },
  set: function chOff() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "chOff_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableColElement.prototype, "vAlign", {
  configurable: true,
  enumerable: true,
  get: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "vAlign_get", arguments);
  },
  set: function vAlign() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "vAlign_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTableColElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLTableColElement.prototype, "HTMLTableColElement", "width_set", arguments);
  }
});