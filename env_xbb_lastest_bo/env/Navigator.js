// Navigator对象

Navigator = function Navigator() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Navigator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Navigator 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Navigator, "Navigator");
bodavm.toolsFunc.defineProperty(Navigator.prototype, "vendorSub", {
  configurable: true,
  enumerable: true,
  get: function vendorSub() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "vendorSub_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "productSub", {
  configurable: true,
  enumerable: true,
  get: function productSub() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "productSub_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "vendor", {
  configurable: true,
  enumerable: true,
  get: function vendor() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "vendor_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "maxTouchPoints", {
  configurable: true,
  enumerable: true,
  get: function maxTouchPoints() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "maxTouchPoints_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "scheduling", {
  configurable: true,
  enumerable: true,
  get: function scheduling() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "scheduling_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "userActivation", {
  configurable: true,
  enumerable: true,
  get: function userActivation() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "userActivation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "doNotTrack", {
  configurable: true,
  enumerable: true,
  get: function doNotTrack() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "doNotTrack_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "geolocation", {
  configurable: true,
  enumerable: true,
  get: function geolocation() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "geolocation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "connection", {
  configurable: true,
  enumerable: true,
  get: function connection() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "connection_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "plugins", {
  configurable: true,
  enumerable: true,
  get: function plugins() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "plugins_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "mimeTypes", {
  configurable: true,
  enumerable: true,
  get: function mimeTypes() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "mimeTypes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "pdfViewerEnabled", {
  configurable: true,
  enumerable: true,
  get: function pdfViewerEnabled() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "pdfViewerEnabled_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "webkitTemporaryStorage", {
  configurable: true,
  enumerable: true,
  get: function webkitTemporaryStorage() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "webkitTemporaryStorage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "webkitPersistentStorage", {
  configurable: true,
  enumerable: true,
  get: function webkitPersistentStorage() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "webkitPersistentStorage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "hardwareConcurrency", {
  configurable: true,
  enumerable: true,
  get: function hardwareConcurrency() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "hardwareConcurrency_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "cookieEnabled", {
  configurable: true,
  enumerable: true,
  get: function cookieEnabled() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "cookieEnabled_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "appCodeName", {
  configurable: true,
  enumerable: true,
  get: function appCodeName() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "appCodeName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "appName", {
  configurable: true,
  enumerable: true,
  get: function appName() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "appName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "appVersion", {
  configurable: true,
  enumerable: true,
  get: function appVersion() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "appVersion_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "platform", {
  configurable: true,
  enumerable: true,
  get: function platform() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "platform_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "product", {
  configurable: true,
  enumerable: true,
  get: function product() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "product_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "userAgent", {
  configurable: true,
  enumerable: true,
  get: function userAgent() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "userAgent_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "language", {
  configurable: true,
  enumerable: true,
  get: function language() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "language_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "languages", {
  configurable: true,
  enumerable: true,
  get: function languages() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "languages_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "onLine", {
  configurable: true,
  enumerable: true,
  get: function onLine() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "onLine_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "webdriver", {
  configurable: true,
  enumerable: true,
  get: function webdriver() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "webdriver_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "getGamepads", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getGamepads() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "getGamepads", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "javaEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function javaEnabled() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "javaEnabled", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "sendBeacon", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function sendBeacon() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "sendBeacon", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "vibrate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function vibrate() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "vibrate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "bluetooth", {
  configurable: true,
  enumerable: true,
  get: function bluetooth() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "bluetooth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "clipboard", {
  configurable: true,
  enumerable: true,
  get: function clipboard() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "clipboard_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "credentials", {
  configurable: true,
  enumerable: true,
  get: function credentials() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "credentials_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "keyboard", {
  configurable: true,
  enumerable: true,
  get: function keyboard() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "keyboard_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "managed", {
  configurable: true,
  enumerable: true,
  get: function managed() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "managed_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "mediaDevices", {
  configurable: true,
  enumerable: true,
  get: function mediaDevices() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "mediaDevices_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "storage", {
  configurable: true,
  enumerable: true,
  get: function storage() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "storage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "serviceWorker", {
  configurable: true,
  enumerable: true,
  get: function serviceWorker() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "serviceWorker_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "virtualKeyboard", {
  configurable: true,
  enumerable: true,
  get: function virtualKeyboard() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "virtualKeyboard_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "wakeLock", {
  configurable: true,
  enumerable: true,
  get: function wakeLock() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "wakeLock_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "deviceMemory", {
  configurable: true,
  enumerable: true,
  get: function deviceMemory() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "deviceMemory_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "ink", {
  configurable: true,
  enumerable: true,
  get: function ink() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "ink_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "hid", {
  configurable: true,
  enumerable: true,
  get: function hid() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "hid_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "locks", {
  configurable: true,
  enumerable: true,
  get: function locks() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "locks_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "mediaCapabilities", {
  configurable: true,
  enumerable: true,
  get: function mediaCapabilities() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "mediaCapabilities_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "mediaSession", {
  configurable: true,
  enumerable: true,
  get: function mediaSession() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "mediaSession_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "permissions", {
  configurable: true,
  enumerable: true,
  get: function permissions() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "permissions_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "presentation", {
  configurable: true,
  enumerable: true,
  get: function presentation() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "presentation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "serial", {
  configurable: true,
  enumerable: true,
  get: function serial() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "serial_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "gpu", {
  configurable: true,
  enumerable: true,
  get: function gpu() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "gpu_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "usb", {
  configurable: true,
  enumerable: true,
  get: function usb() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "usb_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "windowControlsOverlay", {
  configurable: true,
  enumerable: true,
  get: function windowControlsOverlay() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "windowControlsOverlay_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "xr", {
  configurable: true,
  enumerable: true,
  get: function xr() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "xr_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "userAgentData", {
  configurable: true,
  enumerable: true,
  get: function userAgentData() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "userAgentData_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "canShare", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function canShare() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "canShare", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "share", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function share() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "share", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "clearAppBadge", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearAppBadge() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "clearAppBadge", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "getBattery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getBattery() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "getBattery", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "getUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getUserMedia() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "getUserMedia", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "requestMIDIAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestMIDIAccess() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "requestMIDIAccess", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "requestMediaKeySystemAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestMediaKeySystemAccess() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "requestMediaKeySystemAccess", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "setAppBadge", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setAppBadge() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "setAppBadge", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "webkitGetUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function webkitGetUserMedia() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "webkitGetUserMedia", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "getInstalledRelatedApps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInstalledRelatedApps() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "getInstalledRelatedApps", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "registerProtocolHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function registerProtocolHandler() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "registerProtocolHandler", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Navigator.prototype, "unregisterProtocolHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unregisterProtocolHandler() {
    return bodavm.toolsFunc.dispatch(this, Navigator.prototype, "Navigator", "unregisterProtocolHandler", arguments);
  }
});