// CookieStore对象

CookieStore = function CookieStore() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CookieStore)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CookieStore 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CookieStore, "CookieStore");
CookieStore.prototype.__proto__ = EventTarget.prototype;
CookieStore.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAll() {
    return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "getAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function set() {
    return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CookieStore.prototype, "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, CookieStore.prototype, "CookieStore", "onchange_set", arguments);
  }
});