// CookieStoreManager对象

CookieStoreManager = function CookieStoreManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof CookieStoreManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('CookieStoreManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(CookieStoreManager, "CookieStoreManager");
bodavm.toolsFunc.defineProperty(CookieStoreManager.prototype, "getSubscriptions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSubscriptions() {
    return bodavm.toolsFunc.dispatch(this, CookieStoreManager.prototype, "CookieStoreManager", "getSubscriptions", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CookieStoreManager.prototype, "subscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function subscribe() {
    return bodavm.toolsFunc.dispatch(this, CookieStoreManager.prototype, "CookieStoreManager", "subscribe", arguments);
  }
});
bodavm.toolsFunc.defineProperty(CookieStoreManager.prototype, "unsubscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsubscribe() {
    return bodavm.toolsFunc.dispatch(this, CookieStoreManager.prototype, "CookieStoreManager", "unsubscribe", arguments);
  }
});