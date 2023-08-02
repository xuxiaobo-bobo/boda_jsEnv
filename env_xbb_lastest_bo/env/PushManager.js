// PushManager对象

PushManager = function PushManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PushManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PushManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PushManager, "PushManager");
bodavm.toolsFunc.defineProperty(PushManager, "supportedContentEncodings", {
  configurable: true,
  enumerable: true,
  get: function supportedContentEncodings() {
    return bodavm.toolsFunc.dispatch(this, PushManager, "PushManager", "supportedContentEncodings_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PushManager.prototype, "getSubscription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSubscription() {
    return bodavm.toolsFunc.dispatch(this, PushManager.prototype, "PushManager", "getSubscription", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PushManager.prototype, "permissionState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function permissionState() {
    return bodavm.toolsFunc.dispatch(this, PushManager.prototype, "PushManager", "permissionState", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PushManager.prototype, "subscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function subscribe() {
    return bodavm.toolsFunc.dispatch(this, PushManager.prototype, "PushManager", "subscribe", arguments);
  }
});