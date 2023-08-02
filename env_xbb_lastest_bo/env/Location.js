// Location对象

Location = function Location() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Location)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Location 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Location, "Location");
bodavm.memory.cache['location'] = new Location('bobo');

// location = new Location('bobo');
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "valueOf", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function valueOf() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "valueOf", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "ancestorOrigins", {
  configurable: false,
  enumerable: true,
  get: function ancestorOrigins() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "ancestorOrigins_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "href", {
  configurable: false,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "href_get", arguments, 'file:///d%3A/My_Dir/env_xbb_lastest_bo/run/run.html');
  },
  set: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "href_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "origin", {
  configurable: false,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "origin_get", arguments, 'file://');
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "protocol", {
  configurable: false,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "protocol_get", arguments, 'file:');
  },
  set: function protocol() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "protocol_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "host", {
  configurable: false,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "host_get", arguments, '');
  },
  set: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "host_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "hostname", {
  configurable: false,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "hostname_get", arguments, '');
  },
  set: function hostname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "hostname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "port", {
  configurable: false,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "port_get", arguments, '');
  },
  set: function port() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "port_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "pathname", {
  configurable: false,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "pathname_get", arguments, '/d%3A/My_Dir/env_xbb_lastest_bo/run/run.html');
  },
  set: function pathname() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "pathname_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "search", {
  configurable: false,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "search_get", arguments, '');
  },
  set: function search() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "search_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "hash", {
  configurable: false,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "hash_get", arguments, '');
  },
  set: function hash() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "hash_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "assign", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function assign() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "assign", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "reload", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function reload() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "reload", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "replace", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function replace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "replace", arguments);
  }
});
bodavm.toolsFunc.defineProperty(bodavm.memory.cache['location'], "toString", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.cache['location'], "location", "toString", arguments);
  }
});