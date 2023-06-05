// URL对象

bodavm.memory.globalobj['URL'] = function URL() {
  console.log_copy('URL 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof URL)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'URL': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['URL'], "URL");
bodavm.toolsFunc.defineProperty('URL', "createObjectURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createObjectURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].undefined, "URL", "createObjectURL", arguments);
  }
});
bodavm.toolsFunc.defineProperty('URL', "revokeObjectURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function revokeObjectURL() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].undefined, "URL", "revokeObjectURL", arguments);
  }
});
bodavm.toolsFunc.defineProperty('URL', "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "origin_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "protocol_get", arguments);
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "protocol_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "username_get", arguments);
  },
  set: function username() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "username_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "password_get", arguments);
  },
  set: function password() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "password_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "host_get", arguments);
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "host_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "hostname_get", arguments);
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "hostname_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "port_get", arguments);
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "port_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "pathname_get", arguments);
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "pathname_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "search_get", arguments);
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "search_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "searchParams", {
  configurable: true,
  enumerable: true,
  get: function searchParams() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "searchParams_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "hash_get", arguments);
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "hash_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "href_get", arguments);
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "href_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('URL', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['URL'].prototype, "URL", "toString", arguments);
  }
}, 'prototype');