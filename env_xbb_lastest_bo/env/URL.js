// URL对象

URL = function URL() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof URL)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'URL': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('URL 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(URL, "URL");
bodavm.toolsFunc.defineProperty(URL, "createObjectURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createObjectURL() {
    return bodavm.toolsFunc.dispatch(this, URL, "URL", "createObjectURL", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL, "revokeObjectURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function revokeObjectURL() {
    return bodavm.toolsFunc.dispatch(this, URL, "URL", "revokeObjectURL", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "origin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URL.prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "protocol_get", arguments);
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "protocol_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "username_get", arguments);
  },
  set: function username() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "username_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "password_get", arguments);
  },
  set: function password() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "password_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "host_get", arguments);
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "host_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "hostname_get", arguments);
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "hostname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "port_get", arguments);
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "port_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "pathname_get", arguments);
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "pathname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "search_get", arguments);
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "search_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "searchParams", {
  configurable: true,
  enumerable: true,
  get: function searchParams() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "searchParams_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URL.prototype, "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "hash_get", arguments);
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "hash_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "href_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URL.prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, URL.prototype, "URL", "toString", arguments);
  }
});