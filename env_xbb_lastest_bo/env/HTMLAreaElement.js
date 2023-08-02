// HTMLAreaElement对象

HTMLAreaElement = function HTMLAreaElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HTMLAreaElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HTMLAreaElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HTMLAreaElement, "HTMLAreaElement");
HTMLAreaElement.prototype.__proto__ = HTMLElement.prototype;
HTMLAreaElement.__proto__ = HTMLElement;
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "alt", {
  configurable: true,
  enumerable: true,
  get: function alt() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "alt_get", arguments);
  },
  set: function alt() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "alt_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "coords", {
  configurable: true,
  enumerable: true,
  get: function coords() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "coords_get", arguments);
  },
  set: function coords() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "coords_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "download", {
  configurable: true,
  enumerable: true,
  get: function download() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "download_get", arguments);
  },
  set: function download() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "download_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "shape", {
  configurable: true,
  enumerable: true,
  get: function shape() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "shape_get", arguments);
  },
  set: function shape() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "shape_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "target_get", arguments);
  },
  set: function target() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "target_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "ping", {
  configurable: true,
  enumerable: true,
  get: function ping() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "ping_get", arguments);
  },
  set: function ping() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "ping_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "rel", {
  configurable: true,
  enumerable: true,
  get: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "rel_get", arguments);
  },
  set: function rel() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "rel_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "relList", {
  configurable: true,
  enumerable: true,
  get: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "relList_get", arguments);
  },
  set: function relList() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "relList_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "referrerPolicy", {
  configurable: true,
  enumerable: true,
  get: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "referrerPolicy_get", arguments);
  },
  set: function referrerPolicy() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "referrerPolicy_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "noHref", {
  configurable: true,
  enumerable: true,
  get: function noHref() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "noHref_get", arguments);
  },
  set: function noHref() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "noHref_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "origin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "protocol_get", arguments);
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "protocol_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "username_get", arguments);
  },
  set: function username() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "username_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "password_get", arguments);
  },
  set: function password() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "password_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "host_get", arguments);
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "host_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "hostname_get", arguments);
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "hostname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "port_get", arguments);
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "port_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "pathname_get", arguments);
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "pathname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "search_get", arguments);
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "search_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "hash_get", arguments);
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "hash_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "href_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HTMLAreaElement.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, HTMLAreaElement.prototype, "HTMLAreaElement", "toString", arguments);
  }
});