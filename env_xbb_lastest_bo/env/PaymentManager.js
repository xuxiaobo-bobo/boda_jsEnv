// PaymentManager对象

PaymentManager = function PaymentManager() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PaymentManager)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PaymentManager 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PaymentManager, "PaymentManager");
bodavm.toolsFunc.defineProperty(PaymentManager.prototype, "userHint", {
  configurable: true,
  enumerable: true,
  get: function userHint() {
    return bodavm.toolsFunc.dispatch(this, PaymentManager.prototype, "PaymentManager", "userHint_get", arguments);
  },
  set: function userHint() {
    return bodavm.toolsFunc.dispatch(this, PaymentManager.prototype, "PaymentManager", "userHint_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(PaymentManager.prototype, "enableDelegations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function enableDelegations() {
    return bodavm.toolsFunc.dispatch(this, PaymentManager.prototype, "PaymentManager", "enableDelegations", arguments);
  }
});