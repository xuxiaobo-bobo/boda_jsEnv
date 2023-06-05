// PaymentResponse对象

bodavm.memory.globalobj['PaymentResponse'] = function PaymentResponse() {
  console.log_copy('PaymentResponse 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PaymentResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PaymentResponse'], "PaymentResponse");
bodavm.memory.globalobj['PaymentResponse'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['PaymentResponse'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('PaymentResponse', "requestId", {
  configurable: true,
  enumerable: true,
  get: function requestId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "requestId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "methodName", {
  configurable: true,
  enumerable: true,
  get: function methodName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "methodName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "details", {
  configurable: true,
  enumerable: true,
  get: function details() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "details_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "shippingAddress", {
  configurable: true,
  enumerable: true,
  get: function shippingAddress() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "shippingAddress_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "shippingOption", {
  configurable: true,
  enumerable: true,
  get: function shippingOption() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "shippingOption_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "payerName", {
  configurable: true,
  enumerable: true,
  get: function payerName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "payerName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "payerEmail", {
  configurable: true,
  enumerable: true,
  get: function payerEmail() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "payerEmail_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "payerPhone", {
  configurable: true,
  enumerable: true,
  get: function payerPhone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "payerPhone_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "onpayerdetailchange", {
  configurable: true,
  enumerable: true,
  get: function onpayerdetailchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "onpayerdetailchange_get", arguments);
  },
  set: function onpayerdetailchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "onpayerdetailchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "complete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function complete() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "complete", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "retry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function retry() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "retry", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentResponse', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentResponse'].prototype, "PaymentResponse", "toJSON", arguments);
  }
}, 'prototype');