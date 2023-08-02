// PaymentRequestUpdateEvent对象

PaymentRequestUpdateEvent = function PaymentRequestUpdateEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PaymentRequestUpdateEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'PaymentRequestUpdateEvent': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PaymentRequestUpdateEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PaymentRequestUpdateEvent, "PaymentRequestUpdateEvent");
PaymentRequestUpdateEvent.prototype.__proto__ = Event.prototype;
PaymentRequestUpdateEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(PaymentRequestUpdateEvent.prototype, "updateWith", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function updateWith() {
    return bodavm.toolsFunc.dispatch(this, PaymentRequestUpdateEvent.prototype, "PaymentRequestUpdateEvent", "updateWith", arguments);
  }
});