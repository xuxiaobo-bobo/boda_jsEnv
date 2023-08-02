// PaymentMethodChangeEvent对象

PaymentMethodChangeEvent = function PaymentMethodChangeEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PaymentMethodChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PaymentMethodChangeEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PaymentMethodChangeEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PaymentMethodChangeEvent, "PaymentMethodChangeEvent");
PaymentMethodChangeEvent.prototype.__proto__ = PaymentRequestUpdateEvent.prototype;
PaymentMethodChangeEvent.__proto__ = PaymentRequestUpdateEvent;
bodavm.toolsFunc.defineProperty(PaymentMethodChangeEvent.prototype, "methodName", {
  configurable: true,
  enumerable: true,
  get: function methodName() {
    return bodavm.toolsFunc.dispatch(this, PaymentMethodChangeEvent.prototype, "PaymentMethodChangeEvent", "methodName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentMethodChangeEvent.prototype, "methodDetails", {
  configurable: true,
  enumerable: true,
  get: function methodDetails() {
    return bodavm.toolsFunc.dispatch(this, PaymentMethodChangeEvent.prototype, "PaymentMethodChangeEvent", "methodDetails_get", arguments);
  },
  set: undefined
});