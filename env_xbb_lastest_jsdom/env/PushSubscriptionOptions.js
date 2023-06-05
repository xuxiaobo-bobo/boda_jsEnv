// PushSubscriptionOptions对象

bodavm.memory.globalobj['PushSubscriptionOptions'] = function PushSubscriptionOptions() {
  console.log_copy('PushSubscriptionOptions 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PushSubscriptionOptions)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PushSubscriptionOptions'], "PushSubscriptionOptions");
bodavm.toolsFunc.defineProperty('PushSubscriptionOptions', "userVisibleOnly", {
  configurable: true,
  enumerable: true,
  get: function userVisibleOnly() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscriptionOptions'].prototype, "PushSubscriptionOptions", "userVisibleOnly_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushSubscriptionOptions', "applicationServerKey", {
  configurable: true,
  enumerable: true,
  get: function applicationServerKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscriptionOptions'].prototype, "PushSubscriptionOptions", "applicationServerKey_get", arguments);
  },
  set: undefined
}, 'prototype');