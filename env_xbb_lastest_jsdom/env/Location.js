// Location对象

bodavm.memory.globalobj['Location'] = function Location() {
  console.log_copy('Location 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Location)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Location'], "Location");

// location对象

bodavm.memory.globalobj['location'] = {
  _boisinit: bodavm.config.isinit
};
bodavm.memory.globalobj['location'].__proto__ = bodavm.memory.globalobj['Location'].prototype;
bodavm.toolsFunc.defineProperty('location', "valueOf", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function valueOf() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "valueOf", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "ancestorOrigins", {
  configurable: false,
  enumerable: true,
  get: function ancestorOrigins() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "ancestorOrigins_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty('location', "href", {
  configurable: false,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "href_get", arguments, 'http://localhost:63342/%E7%88%AC%E8%99%AB/5s/test.html?_ijt=q7afj33h2bteshkjvmn3buhan8&_ij_reload=RELOAD_ON_SAVE');
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "href_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "origin", {
  configurable: false,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "origin_get", arguments, 'http://localhost:63342');
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty('location', "protocol", {
  configurable: false,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "protocol_get", arguments, 'http:');
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "protocol_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "host", {
  configurable: false,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "host_get", arguments, 'localhost:63342');
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "host_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "hostname", {
  configurable: false,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "hostname_get", arguments, 'localhost');
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "hostname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "port", {
  configurable: false,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "port_get", arguments, '63342');
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "port_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "pathname", {
  configurable: false,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "pathname_get", arguments, '/%E7%88%AC%E8%99%AB/5s/test.html');
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "pathname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "search", {
  configurable: false,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "search_get", arguments, '?_ijt=q7afj33h2bteshkjvmn3buhan8&_ij_reload=RELOAD_ON_SAVE');
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "search_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "hash", {
  configurable: false,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "hash_get", arguments, '');
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "hash_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "assign", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function assign() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "assign", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "reload", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function reload() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "reload", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "replace", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function replace() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "replace", arguments);
  }
});
bodavm.toolsFunc.defineProperty('location', "toString", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, location, "location", "toString", arguments);
  }
});