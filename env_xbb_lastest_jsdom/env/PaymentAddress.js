// PaymentAddress对象

bodavm.memory.globalobj['PaymentAddress'] = function PaymentAddress() {
  console.log_copy('PaymentAddress 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PaymentAddress)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PaymentAddress'], "PaymentAddress");
bodavm.toolsFunc.defineProperty('PaymentAddress', "city", {
  configurable: true,
  enumerable: true,
  get: function city() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "city_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "country", {
  configurable: true,
  enumerable: true,
  get: function country() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "country_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "dependentLocality", {
  configurable: true,
  enumerable: true,
  get: function dependentLocality() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "dependentLocality_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "organization", {
  configurable: true,
  enumerable: true,
  get: function organization() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "organization_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "phone", {
  configurable: true,
  enumerable: true,
  get: function phone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "phone_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "postalCode", {
  configurable: true,
  enumerable: true,
  get: function postalCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "postalCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "recipient", {
  configurable: true,
  enumerable: true,
  get: function recipient() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "recipient_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "region", {
  configurable: true,
  enumerable: true,
  get: function region() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "region_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "sortingCode", {
  configurable: true,
  enumerable: true,
  get: function sortingCode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "sortingCode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "addressLine", {
  configurable: true,
  enumerable: true,
  get: function addressLine() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "addressLine_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PaymentAddress', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PaymentAddress'].prototype, "PaymentAddress", "toJSON", arguments);
  }
}, 'prototype');