// HTMLAnchorElement对象

HTMLAnchorElement = function HTMLAnchorElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLAnchorElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLAnchorElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLAnchorElement, "HTMLAnchorElement");
HTMLAnchorElement.prototype.__proto__ = HTMLElement.prototype;
HTMLAnchorElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "target_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "download", {
  configurable: true,
  enumerable: true,
  get: function download() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "download_get", arguments);
  },
  set: function download() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "download_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "ping", {
  configurable: true,
  enumerable: true,
  get: function ping() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "ping_get", arguments);
  },
  set: function ping() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "ping_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "relList_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hreflang", {
  configurable: true,
  enumerable: true,
  get: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hreflang_get", arguments);
  },
  set: function hreflang() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hreflang_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "type_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "referrerPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "text_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "coords", {
  configurable: true,
  enumerable: true,
  get: function coords() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "coords_get", arguments);
  },
  set: function coords() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "coords_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "charset", {
  configurable: true,
  enumerable: true,
  get: function charset() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "charset_get", arguments);
  },
  set: function charset() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "charset_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "name", {
  configurable: true,
  enumerable: true,
  get: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "name_get", arguments);
  },
  set: function name() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "name_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "rev", {
  configurable: true,
  enumerable: true,
  get: function rev() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rev_get", arguments);
  },
  set: function rev() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "rev_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "shape", {
  configurable: true,
  enumerable: true,
  get: function shape() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "shape_get", arguments);
  },
  set: function shape() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "shape_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "origin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "protocol_get", arguments);
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "protocol_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "username_get", arguments);
  },
  set: function username() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "username_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "password_get", arguments);
  },
  set: function password() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "password_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "host_get", arguments);
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "host_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hostname_get", arguments);
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hostname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "port_get", arguments);
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "port_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "pathname_get", arguments);
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "pathname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "search_get", arguments);
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "search_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hash_get", arguments);
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hash_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "href_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "toString", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAnchorElement.prototype, "hrefTranslate", {
  configurable: true,
  enumerable: true,
  get: function hrefTranslate() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hrefTranslate_get", arguments);
  },
  set: function hrefTranslate() {
    return bodavm.toolsFunc.dispatch(this, HTMLAnchorElement.prototype, "HTMLAnchorElement", "hrefTranslate_set", arguments);
  }
});