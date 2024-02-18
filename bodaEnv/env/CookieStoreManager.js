// CookieStoreManager对象

bodaEnv.memory.globlProtoObj["CookieStoreManager"] = function CookieStoreManager() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CookieStoreManager 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CookieStoreManager"], "CookieStoreManager");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStoreManager"].prototype, "getSubscriptions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSubscriptions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStoreManager"].prototype, "CookieStoreManager", "getSubscriptions", arguments);
    }
  }.getSubscriptions
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStoreManager"].prototype, "subscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    subscribe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStoreManager"].prototype, "CookieStoreManager", "subscribe", arguments);
    }
  }.subscribe
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CookieStoreManager"].prototype, "unsubscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unsubscribe() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CookieStoreManager"].prototype, "CookieStoreManager", "unsubscribe", arguments);
    }
  }.unsubscribe
});