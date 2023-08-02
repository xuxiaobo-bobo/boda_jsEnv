// USBDevice对象

USBDevice = function USBDevice() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBDevice)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBDevice 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBDevice, "USBDevice");
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "usbVersionMajor", {
  configurable: true,
  enumerable: true,
  get: function usbVersionMajor() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "usbVersionMajor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "usbVersionMinor", {
  configurable: true,
  enumerable: true,
  get: function usbVersionMinor() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "usbVersionMinor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "usbVersionSubminor", {
  configurable: true,
  enumerable: true,
  get: function usbVersionSubminor() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "usbVersionSubminor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "deviceClass", {
  configurable: true,
  enumerable: true,
  get: function deviceClass() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "deviceClass_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "deviceSubclass", {
  configurable: true,
  enumerable: true,
  get: function deviceSubclass() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "deviceSubclass_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "deviceProtocol", {
  configurable: true,
  enumerable: true,
  get: function deviceProtocol() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "deviceProtocol_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "vendorId", {
  configurable: true,
  enumerable: true,
  get: function vendorId() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "vendorId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "productId", {
  configurable: true,
  enumerable: true,
  get: function productId() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "productId_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "deviceVersionMajor", {
  configurable: true,
  enumerable: true,
  get: function deviceVersionMajor() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "deviceVersionMajor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "deviceVersionMinor", {
  configurable: true,
  enumerable: true,
  get: function deviceVersionMinor() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "deviceVersionMinor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "deviceVersionSubminor", {
  configurable: true,
  enumerable: true,
  get: function deviceVersionSubminor() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "deviceVersionSubminor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "manufacturerName", {
  configurable: true,
  enumerable: true,
  get: function manufacturerName() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "manufacturerName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "productName", {
  configurable: true,
  enumerable: true,
  get: function productName() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "productName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "serialNumber", {
  configurable: true,
  enumerable: true,
  get: function serialNumber() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "serialNumber_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "configuration", {
  configurable: true,
  enumerable: true,
  get: function configuration() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "configuration_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "configurations", {
  configurable: true,
  enumerable: true,
  get: function configurations() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "configurations_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "opened", {
  configurable: true,
  enumerable: true,
  get: function opened() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "opened_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "claimInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function claimInterface() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "claimInterface", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "clearHalt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearHalt() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "clearHalt", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "controlTransferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function controlTransferIn() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "controlTransferIn", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "controlTransferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function controlTransferOut() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "controlTransferOut", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forget() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "forget", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "isochronousTransferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isochronousTransferIn() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "isochronousTransferIn", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "isochronousTransferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isochronousTransferOut() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "isochronousTransferOut", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "open", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "releaseInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function releaseInterface() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "releaseInterface", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "reset", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "selectAlternateInterface", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectAlternateInterface() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "selectAlternateInterface", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "selectConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function selectConfiguration() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "selectConfiguration", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "transferIn", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferIn() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "transferIn", arguments);
  }
});
bodavm.toolsFunc.defineProperty(USBDevice.prototype, "transferOut", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function transferOut() {
    return bodavm.toolsFunc.dispatch(this, USBDevice.prototype, "USBDevice", "transferOut", arguments);
  }
});