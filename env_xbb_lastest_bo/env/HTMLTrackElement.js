// HTMLTrackElement对象

HTMLTrackElement = function HTMLTrackElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLTrackElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLTrackElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLTrackElement, "HTMLTrackElement");
HTMLTrackElement.prototype.__proto__ = HTMLElement.prototype;
HTMLTrackElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLTrackElement, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement, "LOADED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement, "ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "kind_get", arguments);
  },
  set: function kind() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "kind_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "srclang", {
  configurable: true,
  enumerable: true,
  get: function srclang() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "srclang_get", arguments);
  },
  set: function srclang() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "srclang_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "default", {
  configurable: true,
  enumerable: true,
  get: function bodefault() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "default_get", arguments);
  },
  set: function bodefault() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "default_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "readyState_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, HTMLTrackElement.prototype, "HTMLTrackElement", "track_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "NONE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "LOADING", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "LOADED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(HTMLTrackElement.prototype, "ERROR", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});