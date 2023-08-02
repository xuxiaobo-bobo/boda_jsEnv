// HTMLHRElement对象

HTMLHRElement = function HTMLHRElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLHRElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLHRElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLHRElement, "HTMLHRElement");
HTMLHRElement.prototype.__proto__ = HTMLElement.prototype;
HTMLHRElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLHRElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLHRElement.prototype, "color", {
  configurable: true,
  enumerable: true,
  get: function color() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "color_get", arguments);
  },
  set: function color() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "color_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLHRElement.prototype, "noShade", {
  configurable: true,
  enumerable: true,
  get: function noShade() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "noShade_get", arguments);
  },
  set: function noShade() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "noShade_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLHRElement.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "size_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLHRElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLHRElement.prototype, "HTMLHRElement", "width_set", arguments);
  }
});