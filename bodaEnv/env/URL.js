// URL对象

bodaEnv.memory.globlProtoObj["URL"] = function URL() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('URL 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
  bodaEnv.memory.WeakMap.set(this,new sionURL(...arguments))
  //debugger;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["URL"], "URL");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"], "createObjectURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createObjectURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"], "URL", "createObjectURL", arguments);
    }
  }.createObjectURL
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"], "revokeObjectURL", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    revokeObjectURL() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"], "URL", "revokeObjectURL", arguments);
    }
  }.revokeObjectURL
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: {
    origin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "origin_get", arguments);
    }
  }.origin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "protocol_get", arguments);
    }
  }.protocol,
  set: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "protocol_set", arguments);
    }
  }.protocol
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "username", {
  configurable: true,
  enumerable: true,
  get: {
    username() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "username_get", arguments);
    }
  }.username,
  set: {
    username() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "username_set", arguments);
    }
  }.username
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "password", {
  configurable: true,
  enumerable: true,
  get: {
    password() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "password_get", arguments);
    }
  }.password,
  set: {
    password() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "password_set", arguments);
    }
  }.password
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "host", {
  configurable: true,
  enumerable: true,
  get: {
    host() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "host_get", arguments);
    }
  }.host,
  set: {
    host() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "host_set", arguments);
    }
  }.host
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "hostname", {
  configurable: true,
  enumerable: true,
  get: {
    hostname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "hostname_get", arguments);
    }
  }.hostname,
  set: {
    hostname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "hostname_set", arguments);
    }
  }.hostname
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "port", {
  configurable: true,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "port_get", arguments);
    }
  }.port,
  set: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "port_set", arguments);
    }
  }.port
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "pathname", {
  configurable: true,
  enumerable: true,
  get: {
    pathname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "pathname_get", arguments);
    }
  }.pathname,
  set: {
    pathname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "pathname_set", arguments);
    }
  }.pathname
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "search", {
  configurable: true,
  enumerable: true,
  get: {
    search() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "search_get", arguments);
    }
  }.search,
  set: {
    search() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "search_set", arguments);
    }
  }.search
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "searchParams", {
  configurable: true,
  enumerable: true,
  get: {
    searchParams() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "searchParams_get", arguments);
    }
  }.searchParams,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "hash", {
  configurable: true,
  enumerable: true,
  get: {
    hash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "hash_get", arguments);
    }
  }.hash,
  set: {
    hash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "hash_set", arguments);
    }
  }.hash
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "href", {
  configurable: true,
  enumerable: true,
  get: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "href_get", arguments);
    }
  }.href,
  set: {
    href() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "href_set", arguments);
    }
  }.href
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "toJSON", arguments);
    }
  }.toJSON
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URL"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URL"].prototype, "URL", "toString", arguments);
    }
  }.toString
});