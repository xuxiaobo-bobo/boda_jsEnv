// HIDDevice对象

bodaEnv.memory.globlProtoObj["HIDDevice"] = function HIDDevice() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('HIDDevice 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["HIDDevice"], "HIDDevice");
bodaEnv.memory.globlProtoObj["HIDDevice"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["HIDDevice"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "oninputreport", {
  configurable: true,
  enumerable: true,
  get: {
    oninputreport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "oninputreport_get", arguments);
    }
  }.oninputreport,
  set: {
    oninputreport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "oninputreport_set", arguments);
    }
  }.oninputreport
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "opened", {
  configurable: true,
  enumerable: true,
  get: {
    opened() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "opened_get", arguments);
    }
  }.opened,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "vendorId", {
  configurable: true,
  enumerable: true,
  get: {
    vendorId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "vendorId_get", arguments);
    }
  }.vendorId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "productId", {
  configurable: true,
  enumerable: true,
  get: {
    productId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "productId_get", arguments);
    }
  }.productId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "productName", {
  configurable: true,
  enumerable: true,
  get: {
    productName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "productName_get", arguments);
    }
  }.productName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "collections", {
  configurable: true,
  enumerable: true,
  get: {
    collections() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "collections_get", arguments);
    }
  }.collections,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "forget", arguments);
    }
  }.forget
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "open", arguments);
    }
  }.open
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "receiveFeatureReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    receiveFeatureReport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "receiveFeatureReport", arguments);
    }
  }.receiveFeatureReport
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "sendFeatureReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sendFeatureReport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "sendFeatureReport", arguments);
    }
  }.sendFeatureReport
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "sendReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sendReport() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["HIDDevice"].prototype, "HIDDevice", "sendReport", arguments);
    }
  }.sendReport
});