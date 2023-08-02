// PaymentAddress对象

PaymentAddress = function PaymentAddress() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof PaymentAddress)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('PaymentAddress 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(PaymentAddress, "PaymentAddress");
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "city", {
  configurable: true,
  enumerable: true,
  get: function city() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "city_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "country", {
  configurable: true,
  enumerable: true,
  get: function country() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "country_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "dependentLocality", {
  configurable: true,
  enumerable: true,
  get: function dependentLocality() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "dependentLocality_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "organization", {
  configurable: true,
  enumerable: true,
  get: function organization() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "organization_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "phone", {
  configurable: true,
  enumerable: true,
  get: function phone() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "phone_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "postalCode", {
  configurable: true,
  enumerable: true,
  get: function postalCode() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "postalCode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "recipient", {
  configurable: true,
  enumerable: true,
  get: function recipient() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "recipient_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "region", {
  configurable: true,
  enumerable: true,
  get: function region() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "region_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "sortingCode", {
  configurable: true,
  enumerable: true,
  get: function sortingCode() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "sortingCode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "addressLine", {
  configurable: true,
  enumerable: true,
  get: function addressLine() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "addressLine_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(PaymentAddress.prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, PaymentAddress.prototype, "PaymentAddress", "toJSON", arguments);
  }
});