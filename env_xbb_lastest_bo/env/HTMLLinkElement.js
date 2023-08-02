// HTMLLinkElement对象

HTMLLinkElement = function HTMLLinkElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLLinkElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLLinkElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLLinkElement, "HTMLLinkElement");
HTMLLinkElement.prototype.__proto__ = HTMLElement.prototype;
HTMLLinkElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "disabled_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "href_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "crossOrigin", {
  configurable: true,
  enumerable: true,
  get: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "crossOrigin_get", arguments);
  },
  set: function crossOrigin() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "crossOrigin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "relList_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "media_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "hreflang", {
  configurable: true,
  enumerable: true,
  get: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "hreflang_get", arguments);
  },
  set: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "hreflang_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "as", {
  configurable: true,
  enumerable: true,
  get: function as() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "as_get", arguments);
  },
  set: function as() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "as_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "referrerPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "sizes", {
  configurable: true,
  enumerable: true,
  get: function sizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "sizes_get", arguments);
  },
  set: function sizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "sizes_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "imageSrcset", {
  configurable: true,
  enumerable: true,
  get: function imageSrcset() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSrcset_get", arguments);
  },
  set: function imageSrcset() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSrcset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "imageSizes", {
  configurable: true,
  enumerable: true,
  get: function imageSizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSizes_get", arguments);
  },
  set: function imageSizes() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "imageSizes_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "charset_get", arguments);
  },
  set: function charset() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "charset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "rev", {
  configurable: true,
  enumerable: true,
  get: function rev() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rev_get", arguments);
  },
  set: function rev() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "rev_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "target_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "sheet_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "integrity", {
  configurable: true,
  enumerable: true,
  get: function integrity() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "integrity_get", arguments);
  },
  set: function integrity() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "integrity_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "fetchPriority", {
  configurable: true,
  enumerable: true,
  get: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "fetchPriority_get", arguments);
  },
  set: function fetchPriority() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "fetchPriority_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLLinkElement.prototype, "blocking", {
  configurable: true,
  enumerable: true,
  get: function blocking() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "blocking_get", arguments);
  },
  set: function blocking() {
    return bodavm.toolsFunc.dispatch(this, HTMLLinkElement.prototype, "HTMLLinkElement", "blocking_set", arguments);
  }
});