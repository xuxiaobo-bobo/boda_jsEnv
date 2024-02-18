// URLPattern对象

bodaEnv.memory.globlProtoObj["URLPattern"] = function URLPattern() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('URLPattern 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["URLPattern"], "URLPattern");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: {
    protocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "protocol_get", arguments);
    }
  }.protocol,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "username", {
  configurable: true,
  enumerable: true,
  get: {
    username() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "username_get", arguments);
    }
  }.username,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "password", {
  configurable: true,
  enumerable: true,
  get: {
    password() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "password_get", arguments);
    }
  }.password,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "hostname", {
  configurable: true,
  enumerable: true,
  get: {
    hostname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "hostname_get", arguments);
    }
  }.hostname,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "port", {
  configurable: true,
  enumerable: true,
  get: {
    port() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "port_get", arguments);
    }
  }.port,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "pathname", {
  configurable: true,
  enumerable: true,
  get: {
    pathname() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "pathname_get", arguments);
    }
  }.pathname,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "search", {
  configurable: true,
  enumerable: true,
  get: {
    search() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "search_get", arguments);
    }
  }.search,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "hash", {
  configurable: true,
  enumerable: true,
  get: {
    hash() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "hash_get", arguments);
    }
  }.hash,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "exec", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    exec() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "exec", arguments);
    }
  }.exec
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "test", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    test() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLPattern"].prototype, "URLPattern", "test", arguments);
    }
  }.test
});