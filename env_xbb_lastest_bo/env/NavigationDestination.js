// NavigationDestination对象

NavigationDestination = function NavigationDestination() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof NavigationDestination)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('NavigationDestination 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(NavigationDestination, "NavigationDestination");
bodavm.toolsFunc.defineProperty(NavigationDestination.prototype, "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, NavigationDestination.prototype, "NavigationDestination", "key_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationDestination.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, NavigationDestination.prototype, "NavigationDestination", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationDestination.prototype, "url", {
  configurable: true,
  enumerable: true,
  get: function url() {
    return bodavm.toolsFunc.dispatch(this, NavigationDestination.prototype, "NavigationDestination", "url_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationDestination.prototype, "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, NavigationDestination.prototype, "NavigationDestination", "index_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationDestination.prototype, "sameDocument", {
  configurable: true,
  enumerable: true,
  get: function sameDocument() {
    return bodavm.toolsFunc.dispatch(this, NavigationDestination.prototype, "NavigationDestination", "sameDocument_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(NavigationDestination.prototype, "getState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getState() {
    return bodavm.toolsFunc.dispatch(this, NavigationDestination.prototype, "NavigationDestination", "getState", arguments);
  }
});