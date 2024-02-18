// USBDevice对象

bodaEnv.memory.globlProtoObj["USBDevice"] = function USBDevice() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('USBDevice 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["USBDevice"], "USBDevice");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "usbVersionMajor", {
  configurable: true,
  enumerable: true,
  get: {
    usbVersionMajor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "usbVersionMajor_get", arguments);
    }
  }.usbVersionMajor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "usbVersionMinor", {
  configurable: true,
  enumerable: true,
  get: {
    usbVersionMinor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "usbVersionMinor_get", arguments);
    }
  }.usbVersionMinor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "usbVersionSubminor", {
  configurable: true,
  enumerable: true,
  get: {
    usbVersionSubminor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "usbVersionSubminor_get", arguments);
    }
  }.usbVersionSubminor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "deviceClass", {
  configurable: true,
  enumerable: true,
  get: {
    deviceClass() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "deviceClass_get", arguments);
    }
  }.deviceClass,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "deviceSubclass", {
  configurable: true,
  enumerable: true,
  get: {
    deviceSubclass() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "deviceSubclass_get", arguments);
    }
  }.deviceSubclass,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "deviceProtocol", {
  configurable: true,
  enumerable: true,
  get: {
    deviceProtocol() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "deviceProtocol_get", arguments);
    }
  }.deviceProtocol,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "vendorId", {
  configurable: true,
  enumerable: true,
  get: {
    vendorId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "vendorId_get", arguments);
    }
  }.vendorId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "productId", {
  configurable: true,
  enumerable: true,
  get: {
    productId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "productId_get", arguments);
    }
  }.productId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "deviceVersionMajor", {
  configurable: true,
  enumerable: true,
  get: {
    deviceVersionMajor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "deviceVersionMajor_get", arguments);
    }
  }.deviceVersionMajor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "deviceVersionMinor", {
  configurable: true,
  enumerable: true,
  get: {
    deviceVersionMinor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "deviceVersionMinor_get", arguments);
    }
  }.deviceVersionMinor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "deviceVersionSubminor", {
  configurable: true,
  enumerable: true,
  get: {
    deviceVersionSubminor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "deviceVersionSubminor_get", arguments);
    }
  }.deviceVersionSubminor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "manufacturerName", {
  configurable: true,
  enumerable: true,
  get: {
    manufacturerName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "manufacturerName_get", arguments);
    }
  }.manufacturerName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "productName", {
  configurable: true,
  enumerable: true,
  get: {
    productName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "productName_get", arguments);
    }
  }.productName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "serialNumber", {
  configurable: true,
  enumerable: true,
  get: {
    serialNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "serialNumber_get", arguments);
    }
  }.serialNumber,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "configuration", {
  configurable: true,
  enumerable: true,
  get: {
    configuration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "configuration_get", arguments);
    }
  }.configuration,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "configurations", {
  configurable: true,
  enumerable: true,
  get: {
    configurations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "configurations_get", arguments);
    }
  }.configurations,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "opened", {
  configurable: true,
  enumerable: true,
  get: {
    opened() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "opened_get", arguments);
    }
  }.opened,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "claimInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    claimInterface() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "claimInterface", arguments);
    }
  }.claimInterface
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "clearHalt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearHalt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "clearHalt", arguments);
    }
  }.clearHalt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    close() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "close", arguments);
    }
  }.close
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "controlTransferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    controlTransferIn() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "controlTransferIn", arguments);
    }
  }.controlTransferIn
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "controlTransferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    controlTransferOut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "controlTransferOut", arguments);
    }
  }.controlTransferOut
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forget() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "forget", arguments);
    }
  }.forget
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "isochronousTransferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isochronousTransferIn() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "isochronousTransferIn", arguments);
    }
  }.isochronousTransferIn
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "isochronousTransferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isochronousTransferOut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "isochronousTransferOut", arguments);
    }
  }.isochronousTransferOut
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "open", arguments);
    }
  }.open
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "releaseInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    releaseInterface() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "releaseInterface", arguments);
    }
  }.releaseInterface
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reset() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "reset", arguments);
    }
  }.reset
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "selectAlternateInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    selectAlternateInterface() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "selectAlternateInterface", arguments);
    }
  }.selectAlternateInterface
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "selectConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    selectConfiguration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "selectConfiguration", arguments);
    }
  }.selectConfiguration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "transferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transferIn() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "transferIn", arguments);
    }
  }.transferIn
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "transferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    transferOut() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["USBDevice"].prototype, "USBDevice", "transferOut", arguments);
    }
  }.transferOut
});