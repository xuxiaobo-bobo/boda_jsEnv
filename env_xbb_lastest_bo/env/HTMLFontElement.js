// HTMLFontElement对象

HTMLFontElement = function HTMLFontElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLFontElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLFontElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLFontElement, "HTMLFontElement");
HTMLFontElement.prototype.__proto__ = HTMLElement.prototype;
HTMLFontElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFontElement.prototype, "color", {
  configurable: true,
  enumerable: true,
  get: function color() {
    return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "color_get", arguments);
  },
  set: function color() {
    return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "color_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFontElement.prototype, "face", {
  configurable: true,
  enumerable: true,
  get: function face() {
    return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "face_get", arguments);
  },
  set: function face() {
    return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "face_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFontElement.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLFontElement.prototype, "HTMLFontElement", "size_set", arguments);
  }
});