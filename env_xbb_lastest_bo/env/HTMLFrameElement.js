// HTMLFrameElement对象

HTMLFrameElement = function HTMLFrameElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLFrameElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLFrameElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLFrameElement, "HTMLFrameElement");
HTMLFrameElement.prototype.__proto__ = HTMLElement.prototype;
HTMLFrameElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "scrolling", {
  configurable: true,
  enumerable: true,
  get: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "scrolling_get", arguments);
  },
  set: function scrolling() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "scrolling_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "frameBorder", {
  configurable: true,
  enumerable: true,
  get: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "frameBorder_get", arguments);
  },
  set: function frameBorder() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "frameBorder_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "longDesc", {
  configurable: true,
  enumerable: true,
  get: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "longDesc_get", arguments);
  },
  set: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "longDesc_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "noResize", {
  configurable: true,
  enumerable: true,
  get: function noResize() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "noResize_get", arguments);
  },
  set: function noResize() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "noResize_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "contentDocument", {
  configurable: true,
  enumerable: true,
  get: function contentDocument() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "contentDocument_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "contentWindow", {
  configurable: true,
  enumerable: true,
  get: function contentWindow() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "contentWindow_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "marginHeight", {
  configurable: true,
  enumerable: true,
  get: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "marginHeight_get", arguments);
  },
  set: function marginHeight() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "marginHeight_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLFrameElement.prototype, "marginWidth", {
  configurable: true,
  enumerable: true,
  get: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "marginWidth_get", arguments);
  },
  set: function marginWidth() {
    return bodavm.toolsFunc.dispatch(this, HTMLFrameElement.prototype, "HTMLFrameElement", "marginWidth_set", arguments);
  }
});