// PaymentResponse对象

bodaEnv.memory.globlProtoObj["PaymentResponse"] = function PaymentResponse() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PaymentResponse 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PaymentResponse"], "PaymentResponse");
bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["PaymentResponse"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "requestId", {
  configurable: true,
  enumerable: true,
  get: {
    requestId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "requestId_get", arguments);
    }
  }.requestId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "methodName", {
  configurable: true,
  enumerable: true,
  get: {
    methodName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "methodName_get", arguments);
    }
  }.methodName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "details", {
  configurable: true,
  enumerable: true,
  get: {
    details() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "details_get", arguments);
    }
  }.details,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "shippingAddress", {
  configurable: true,
  enumerable: true,
  get: {
    shippingAddress() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "shippingAddress_get", arguments);
    }
  }.shippingAddress,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "shippingOption", {
  configurable: true,
  enumerable: true,
  get: {
    shippingOption() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "shippingOption_get", arguments);
    }
  }.shippingOption,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "payerName", {
  configurable: true,
  enumerable: true,
  get: {
    payerName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "payerName_get", arguments);
    }
  }.payerName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "payerEmail", {
  configurable: true,
  enumerable: true,
  get: {
    payerEmail() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "payerEmail_get", arguments);
    }
  }.payerEmail,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "payerPhone", {
  configurable: true,
  enumerable: true,
  get: {
    payerPhone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "payerPhone_get", arguments);
    }
  }.payerPhone,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "onpayerdetailchange", {
  configurable: true,
  enumerable: true,
  get: {
    onpayerdetailchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "onpayerdetailchange_get", arguments);
    }
  }.onpayerdetailchange,
  set: {
    onpayerdetailchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "onpayerdetailchange_set", arguments);
    }
  }.onpayerdetailchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "complete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    complete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "complete", arguments);
    }
  }.complete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "retry", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    retry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "retry", arguments);
    }
  }.retry
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentResponse"].prototype, "PaymentResponse", "toJSON", arguments);
    }
  }.toJSON
});