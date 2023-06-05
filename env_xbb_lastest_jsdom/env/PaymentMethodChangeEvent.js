// PaymentMethodChangeEvent对象

bodavm.memory.globalobj['PaymentMethodChangeEvent'] = function PaymentMethodChangeEvent() {
  console.log_copy('PaymentMethodChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PaymentMethodChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PaymentMethodChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PaymentMethodChangeEvent'], "PaymentMethodChangeEvent");
bodavm.memory.globalobj['PaymentMethodChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['PaymentRequestUpdateEvent'].prototype;
bodavm.memory.globalobj['PaymentMethodChangeEvent'].__proto__ = bodavm.memory.globalobj['PaymentRequestUpdateEvent'];
bodavm.toolsFunc.defineProperty('PaymentMethodChangeEvent', "methodName", {
  configurable: true,
  enumerable: true,
  get: function methodName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentMethodChangeEvent'].prototype, "PaymentMethodChangeEvent", "methodName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentMethodChangeEvent', "methodDetails", {
  configurable: true,
  enumerable: true,
  get: function methodDetails() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentMethodChangeEvent'].prototype, "PaymentMethodChangeEvent", "methodDetails_get", arguments);
  },
  set: undefined
}, 'prototype');