// HTMLMetaElement对象

HTMLMetaElement = function HTMLMetaElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLMetaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLMetaElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLMetaElement, "HTMLMetaElement");
HTMLMetaElement.prototype.__proto__ = HTMLElement.prototype;
HTMLMetaElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "httpEquiv", {
  configurable: true,
  enumerable: true,
  get: function httpEquiv() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "httpEquiv_get", arguments);
  },
  set: function httpEquiv() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "httpEquiv_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "content", {
  configurable: true,
  enumerable: true,
  get: function content() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "content_get", arguments);
  },
  set: function content() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "content_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "media_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLMetaElement.prototype, "scheme", {
  configurable: true,
  enumerable: true,
  get: function scheme() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "scheme_get", arguments);
  },
  set: function scheme() {
    return bodavm.toolsFunc.dispatch(this, HTMLMetaElement.prototype, "HTMLMetaElement", "scheme_set", arguments);
  }
});