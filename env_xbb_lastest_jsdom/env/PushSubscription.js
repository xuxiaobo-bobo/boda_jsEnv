// PushSubscription对象

bodavm.memory.globalobj['PushSubscription'] = function PushSubscription() {
  console.log_copy('PushSubscription 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PushSubscription)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PushSubscription'], "PushSubscription");
bodavm.toolsFunc.defineProperty('PushSubscription', "endpoint", {
  configurable: true,
  enumerable: true,
  get: function endpoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscription'].prototype, "PushSubscription", "endpoint_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushSubscription', "expirationTime", {
  configurable: true,
  enumerable: true,
  get: function expirationTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscription'].prototype, "PushSubscription", "expirationTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushSubscription', "options", {
  configurable: true,
  enumerable: true,
  get: function options() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscription'].prototype, "PushSubscription", "options_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushSubscription', "getKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscription'].prototype, "PushSubscription", "getKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushSubscription', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscription'].prototype, "PushSubscription", "toJSON", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PushSubscription', "unsubscribe", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsubscribe() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PushSubscription'].prototype, "PushSubscription", "unsubscribe", arguments);
  }
}, 'prototype');