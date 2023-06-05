// PaymentManager对象

bodavm.memory.globalobj['PaymentManager'] = function PaymentManager() {
  console.log_copy('PaymentManager 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PaymentManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PaymentManager'], "PaymentManager");
bodavm.toolsFunc.defineProperty('PaymentManager', "userHint", {
  configurable: true,
  enumerable: true,
  get: function userHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentManager'].prototype, "PaymentManager", "userHint_get", arguments);
  },
  set: function userHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentManager'].prototype, "PaymentManager", "userHint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentManager', "enableDelegations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enableDelegations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentManager'].prototype, "PaymentManager", "enableDelegations", arguments);
  }
}, 'prototype');