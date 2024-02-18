// PaymentAddress对象

bodaEnv.memory.globlProtoObj["PaymentAddress"] = function PaymentAddress() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('PaymentAddress 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["PaymentAddress"], "PaymentAddress");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "city", {
  configurable: true,
  enumerable: true,
  get: {
    city() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "city_get", arguments);
    }
  }.city,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "country", {
  configurable: true,
  enumerable: true,
  get: {
    country() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "country_get", arguments);
    }
  }.country,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "dependentLocality", {
  configurable: true,
  enumerable: true,
  get: {
    dependentLocality() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "dependentLocality_get", arguments);
    }
  }.dependentLocality,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "organization", {
  configurable: true,
  enumerable: true,
  get: {
    organization() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "organization_get", arguments);
    }
  }.organization,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "phone", {
  configurable: true,
  enumerable: true,
  get: {
    phone() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "phone_get", arguments);
    }
  }.phone,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "postalCode", {
  configurable: true,
  enumerable: true,
  get: {
    postalCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "postalCode_get", arguments);
    }
  }.postalCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "recipient", {
  configurable: true,
  enumerable: true,
  get: {
    recipient() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "recipient_get", arguments);
    }
  }.recipient,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "region", {
  configurable: true,
  enumerable: true,
  get: {
    region() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "region_get", arguments);
    }
  }.region,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "sortingCode", {
  configurable: true,
  enumerable: true,
  get: {
    sortingCode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "sortingCode_get", arguments);
    }
  }.sortingCode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "addressLine", {
  configurable: true,
  enumerable: true,
  get: {
    addressLine() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "addressLine_get", arguments);
    }
  }.addressLine,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["PaymentAddress"].prototype, "PaymentAddress", "toJSON", arguments);
    }
  }.toJSON
});