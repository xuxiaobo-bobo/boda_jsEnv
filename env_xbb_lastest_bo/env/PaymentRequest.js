// PaymentRequest对象

PaymentRequest = function PaymentRequest() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PaymentRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PaymentRequest': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PaymentRequest 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PaymentRequest, "PaymentRequest");
PaymentRequest.prototype.__proto__ = EventTarget.prototype;
PaymentRequest.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "shippingAddress", {
  configurable: true,
  enumerable: true,
  get: function shippingAddress() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "shippingAddress_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "shippingOption", {
  configurable: true,
  enumerable: true,
  get: function shippingOption() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "shippingOption_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "shippingType", {
  configurable: true,
  enumerable: true,
  get: function shippingType() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "shippingType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "onshippingaddresschange", {
  configurable: true,
  enumerable: true,
  get: function onshippingaddresschange() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "onshippingaddresschange_get", arguments);
  },
  set: function onshippingaddresschange() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "onshippingaddresschange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "onshippingoptionchange", {
  configurable: true,
  enumerable: true,
  get: function onshippingoptionchange() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "onshippingoptionchange_get", arguments);
  },
  set: function onshippingoptionchange() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "onshippingoptionchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function abort() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "abort", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "canMakePayment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canMakePayment() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "canMakePayment", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "hasEnrolledInstrument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function hasEnrolledInstrument() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "hasEnrolledInstrument", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function show() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "show", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentRequest.prototype, "onpaymentmethodchange", {
  configurable: true,
  enumerable: true,
  get: function onpaymentmethodchange() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "onpaymentmethodchange_get", arguments);
  },
  set: function onpaymentmethodchange() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequest.prototype, "PaymentRequest", "onpaymentmethodchange_set", arguments);
  }
});