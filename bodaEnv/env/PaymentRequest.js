// PaymentRequest对象

bodaEnv.memory.globlProtoObj["PaymentRequest"] = function PaymentRequest() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PaymentRequest 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PaymentRequest"], "PaymentRequest");
bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PaymentRequest"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "id", {
  configurable: true,
  enumerable: true,
  get: {
    id() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "id_get", arguments);
    }
  }.id,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "shippingAddress", {
  configurable: true,
  enumerable: true,
  get: {
    shippingAddress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "shippingAddress_get", arguments);
    }
  }.shippingAddress,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "shippingOption", {
  configurable: true,
  enumerable: true,
  get: {
    shippingOption() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "shippingOption_get", arguments);
    }
  }.shippingOption,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "shippingType", {
  configurable: true,
  enumerable: true,
  get: {
    shippingType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "shippingType_get", arguments);
    }
  }.shippingType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "onshippingaddresschange", {
  configurable: true,
  enumerable: true,
  get: {
    onshippingaddresschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "onshippingaddresschange_get", arguments);
    }
  }.onshippingaddresschange,
  set: {
    onshippingaddresschange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "onshippingaddresschange_set", arguments);
    }
  }.onshippingaddresschange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "onshippingoptionchange", {
  configurable: true,
  enumerable: true,
  get: {
    onshippingoptionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "onshippingoptionchange_get", arguments);
    }
  }.onshippingoptionchange,
  set: {
    onshippingoptionchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "onshippingoptionchange_set", arguments);
    }
  }.onshippingoptionchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "abort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    abort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "abort", arguments);
    }
  }.abort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "canMakePayment", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    canMakePayment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "canMakePayment", arguments);
    }
  }.canMakePayment
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "hasEnrolledInstrument", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    hasEnrolledInstrument() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "hasEnrolledInstrument", arguments);
    }
  }.hasEnrolledInstrument
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "show", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    show() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "show", arguments);
    }
  }.show
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "onpaymentmethodchange", {
  configurable: true,
  enumerable: true,
  get: {
    onpaymentmethodchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "onpaymentmethodchange_get", arguments);
    }
  }.onpaymentmethodchange,
  set: {
    onpaymentmethodchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequest"].prototype, "PaymentRequest", "onpaymentmethodchange_set", arguments);
    }
  }.onpaymentmethodchange
});