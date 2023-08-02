// PaymentResponse对象

PaymentResponse = function PaymentResponse() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PaymentResponse)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PaymentResponse 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PaymentResponse, "PaymentResponse");
PaymentResponse.prototype.__proto__ = EventTarget.prototype;
PaymentResponse.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "requestId", {
  configurable: true,
  enumerable: true,
  get: function requestId() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "requestId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "methodName", {
  configurable: true,
  enumerable: true,
  get: function methodName() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "methodName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "details", {
  configurable: true,
  enumerable: true,
  get: function details() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "details_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "shippingAddress", {
  configurable: true,
  enumerable: true,
  get: function shippingAddress() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "shippingAddress_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "shippingOption", {
  configurable: true,
  enumerable: true,
  get: function shippingOption() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "shippingOption_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "payerName", {
  configurable: true,
  enumerable: true,
  get: function payerName() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "payerName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "payerEmail", {
  configurable: true,
  enumerable: true,
  get: function payerEmail() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "payerEmail_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "payerPhone", {
  configurable: true,
  enumerable: true,
  get: function payerPhone() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "payerPhone_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "onpayerdetailchange", {
  configurable: true,
  enumerable: true,
  get: function onpayerdetailchange() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "onpayerdetailchange_get", arguments);
  },
  set: function onpayerdetailchange() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "onpayerdetailchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "complete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function complete() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "complete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "retry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function retry() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "retry", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentResponse.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PaymentResponse.prototype, "PaymentResponse", "toJSON", arguments);
  }
});