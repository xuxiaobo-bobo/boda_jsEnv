// HTMLImageElement对象

HTMLImageElement = function HTMLImageElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLImageElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLImageElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLImageElement, "HTMLImageElement");
HTMLImageElement.prototype.__proto__ = HTMLElement.prototype;
HTMLImageElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "alt", {
  configurable: true,
  enumerable: true,
  get: function alt() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "alt_get", arguments);
  },
  set: function alt() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "alt_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "src", {
  configurable: true,
  enumerable: true,
  get: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "src_get", arguments);
  },
  set: function src() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "src_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "srcset", {
  configurable: true,
  enumerable: true,
  get: function srcset() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "srcset_get", arguments);
  },
  set: function srcset() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "srcset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: function sizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "sizes_get", arguments);
  },
  set: function sizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "sizes_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "crossOrigin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "useMap", {
  configurable: true,
  enumerable: true,
  get: function useMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "useMap_get", arguments);
  },
  set: function useMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "useMap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "isMap", {
  configurable: true,
  enumerable: true,
  get: function isMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "isMap_get", arguments);
  },
  set: function isMap() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "isMap_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "width_get", arguments);
  },
  set: function width() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "width_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "height_get", arguments);
  },
  set: function height() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "height_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalWidth", {
  configurable: true,
  enumerable: true,
  get: function naturalWidth() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "naturalWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "naturalHeight", {
  configurable: true,
  enumerable: true,
  get: function naturalHeight() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "naturalHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "complete", {
  configurable: true,
  enumerable: true,
  get: function complete() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "complete_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "currentSrc", {
  configurable: true,
  enumerable: true,
  get: function currentSrc() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "currentSrc_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "referrerPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "decoding", {
  configurable: true,
  enumerable: true,
  get: function decoding() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "decoding_get", arguments);
  },
  set: function decoding() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "decoding_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "lowsrc", {
  configurable: true,
  enumerable: true,
  get: function lowsrc() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "lowsrc_get", arguments);
  },
  set: function lowsrc() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "lowsrc_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "align_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "hspace", {
  configurable: true,
  enumerable: true,
  get: function hspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "hspace_get", arguments);
  },
  set: function hspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "hspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "vspace", {
  configurable: true,
  enumerable: true,
  get: function vspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "vspace_get", arguments);
  },
  set: function vspace() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "vspace_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "longDesc", {
  configurable: true,
  enumerable: true,
  get: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "longDesc_get", arguments);
  },
  set: function longDesc() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "longDesc_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "border", {
  configurable: true,
  enumerable: true,
  get: function border() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "border_get", arguments);
  },
  set: function border() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "border_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "decode", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "fetchPriority_get", arguments);
  },
  set: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "fetchPriority_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLImageElement.prototype, "loading", {
  configurable: true,
  enumerable: true,
  get: function loading() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "loading_get", arguments);
  },
  set: function loading() {
    return bodavm.toolsFunc.dispatch(this, HTMLImageElement.prototype, "HTMLImageElement", "loading_set", arguments);
  }
});