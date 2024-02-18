// PaymentRequestUpdateEvent对象

bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"] = function PaymentRequestUpdateEvent() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PaymentRequestUpdateEvent 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"], "PaymentRequestUpdateEvent");
bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["Event"].prototype;
bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"].__proto__ = bodaEnv.memory.globlProtoObj["Event"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"].prototype, "updateWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    updateWith() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentRequestUpdateEvent"].prototype, "PaymentRequestUpdateEvent", "updateWith", arguments);
    }
  }.updateWith
});