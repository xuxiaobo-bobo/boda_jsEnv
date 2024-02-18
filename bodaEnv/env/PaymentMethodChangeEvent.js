// PaymentMethodChangeEvent对象

bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"] = function PaymentMethodChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PaymentMethodChangeEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"], "PaymentMethodChangeEvent");
bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"].prototype;
bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"].__proto__ = bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"].prototype, "methodName", {
  configurable: true,
  enumerable: true,
  get: {
    methodName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"].prototype, "PaymentMethodChangeEvent", "methodName_get", arguments);
    }
  }.methodName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"].prototype, "methodDetails", {
  configurable: true,
  enumerable: true,
  get: {
    methodDetails() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentMethodChangeEvent"].prototype, "PaymentMethodChangeEvent", "methodDetails_get", arguments);
    }
  }.methodDetails,
  set: undefined
});