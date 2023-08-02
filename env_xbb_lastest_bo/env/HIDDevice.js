// HIDDevice对象

HIDDevice = function HIDDevice() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof HIDDevice)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('HIDDevice 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(HIDDevice, "HIDDevice");
HIDDevice.prototype.__proto__ = EventTarget.prototype;
HIDDevice.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "oninputreport", {
  configurable: true,
  enumerable: true,
  get: function oninputreport() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "oninputreport_get", arguments);
  },
  set: function oninputreport() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "oninputreport_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "opened", {
  configurable: true,
  enumerable: true,
  get: function opened() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "opened_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "vendorId", {
  configurable: true,
  enumerable: true,
  get: function vendorId() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "vendorId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "productId", {
  configurable: true,
  enumerable: true,
  get: function productId() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "productId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "productName", {
  configurable: true,
  enumerable: true,
  get: function productName() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "productName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "collections", {
  configurable: true,
  enumerable: true,
  get: function collections() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "collections_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forget() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "forget", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "open", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "receiveFeatureReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function receiveFeatureReport() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "receiveFeatureReport", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "sendFeatureReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sendFeatureReport() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "sendFeatureReport", arguments);
  }
});
bodavm.toolsFunc.defineProperty(HIDDevice.prototype, "sendReport", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sendReport() {
    return bodavm.toolsFunc.dispatch(this, HIDDevice.prototype, "HIDDevice", "sendReport", arguments);
  }
});