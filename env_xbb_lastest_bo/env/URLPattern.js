// URLPattern对象

URLPattern = function URLPattern() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('URLPattern 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(URLPattern, "URLPattern");
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "protocol", {
  configurable: true,
  enumerable: true,
  get: function protocol() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "protocol_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "username", {
  configurable: true,
  enumerable: true,
  get: function username() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "username_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "password", {
  configurable: true,
  enumerable: true,
  get: function password() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "password_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "hostname", {
  configurable: true,
  enumerable: true,
  get: function hostname() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "hostname_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "port", {
  configurable: true,
  enumerable: true,
  get: function port() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "port_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "pathname", {
  configurable: true,
  enumerable: true,
  get: function pathname() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "pathname_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "search", {
  configurable: true,
  enumerable: true,
  get: function search() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "search_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "hash", {
  configurable: true,
  enumerable: true,
  get: function hash() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "hash_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "exec", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function exec() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "exec", arguments);
  }
});
bodavm.toolsFunc.defineProperty(URLPattern.prototype, "test", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function test() {
    return bodavm.toolsFunc.dispatch(this, URLPattern.prototype, "URLPattern", "test", arguments);
  }
});