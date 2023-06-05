// PushManager对象

bodavm.memory.globalobj['PushManager'] = function PushManager() {
  console.log_copy('PushManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PushManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PushManager'], "PushManager");
bodavm.toolsFunc.defineProperty('PushManager', "supportedContentEncodings", {
  configurable: true,
  enumerable: true,
  get: function supportedContentEncodings() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushManager'].undefined, "PushManager", "supportedContentEncodings_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty('PushManager', "getSubscription", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSubscription() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushManager'].prototype, "PushManager", "getSubscription", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushManager', "permissionState", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function permissionState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushManager'].prototype, "PushManager", "permissionState", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushManager', "subscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function subscribe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushManager'].prototype, "PushManager", "subscribe", arguments);
  }
}, 'prototype');