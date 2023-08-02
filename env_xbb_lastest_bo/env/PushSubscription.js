// PushSubscription对象

PushSubscription = function PushSubscription() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PushSubscription)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PushSubscription 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PushSubscription, "PushSubscription");
bodavm.toolsFunc.defineProperty(PushSubscription.prototype, "endpoint", {
  configurable: true,
  enumerable: true,
  get: function endpoint() {
    return bodavm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "endpoint_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PushSubscription.prototype, "expirationTime", {
  configurable: true,
  enumerable: true,
  get: function expirationTime() {
    return bodavm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "expirationTime_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PushSubscription.prototype, "options", {
  configurable: true,
  enumerable: true,
  get: function options() {
    return bodavm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "options_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PushSubscription.prototype, "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getKey() {
    return bodavm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "getKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PushSubscription.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "toJSON", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PushSubscription.prototype, "unsubscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsubscribe() {
    return bodavm.toolsFunc.dispatch(this, PushSubscription.prototype, "PushSubscription", "unsubscribe", arguments);
  }
});