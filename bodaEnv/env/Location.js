// Location对象

bodaEnv.memory.globlProtoObj["Location"] = function Location() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Location 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Location"], "Location");

// location对象

bodaEnv.memory.globlProtoObj["location"] = new bodaEnv.memory.globlProtoObj["Location"]('bobo');
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "valueOf", {
  configurable: false,
  enumerable: false,
  writable: false,
  value: {
    valueOf() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "valueOf", arguments);
    }
  }.valueOf
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "ancestorOrigins", {
  configurable: false,
  enumerable: true,
  get: {
    ancestorOrigins() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "ancestorOrigins_get", arguments);
    }
  }.ancestorOrigins,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "href", {
  configurable: false,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "href_get", arguments, 'file:///D:/bodaEnv/test.html');
    }
  }.href,
  set: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "href_set", arguments);
    }
  }.href
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "origin", {
  configurable: false,
  enumerable: true,
  get: {
    origin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "origin_get", arguments, 'file://');
    }
  }.origin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "protocol", {
  configurable: false,
  enumerable: true,
  get: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "protocol_get", arguments, 'file:');
    }
  }.protocol,
  set: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "protocol_set", arguments);
    }
  }.protocol
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "host", {
  configurable: false,
  enumerable: true,
  get: {
    host() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "host_get", arguments, '');
    }
  }.host,
  set: {
    host() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "host_set", arguments);
    }
  }.host
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "hostname", {
  configurable: false,
  enumerable: true,
  get: {
    hostname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "hostname_get", arguments, '');
    }
  }.hostname,
  set: {
    hostname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "hostname_set", arguments);
    }
  }.hostname
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "port", {
  configurable: false,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "port_get", arguments, '');
    }
  }.port,
  set: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "port_set", arguments);
    }
  }.port
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "pathname", {
  configurable: false,
  enumerable: true,
  get: {
    pathname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "pathname_get", arguments, '/D:/bodaEnv/test.html');
    }
  }.pathname,
  set: {
    pathname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "pathname_set", arguments);
    }
  }.pathname
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "search", {
  configurable: false,
  enumerable: true,
  get: {
    search() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "search_get", arguments, '');
    }
  }.search,
  set: {
    search() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "search_set", arguments);
    }
  }.search
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "hash", {
  configurable: false,
  enumerable: true,
  get: {
    hash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "hash_get", arguments, '');
    }
  }.hash,
  set: {
    hash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "hash_set", arguments);
    }
  }.hash
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "assign", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: {
    assign() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "assign", arguments);
    }
  }.assign
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "reload", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: {
    reload() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "reload", arguments);
    }
  }.reload
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "replace", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: {
    replace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "replace", arguments);
    }
  }.replace
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["location"], "toString", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["location"], "location", "toString", arguments);
    }
  }.toString
});