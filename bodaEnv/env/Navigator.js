// Navigator对象

bodaEnv.memory.globlProtoObj["Navigator"] = function Navigator() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Navigator 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Navigator"], "Navigator");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "vendorSub", {
  configurable: true,
  enumerable: true,
  get: {
    vendorSub() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "vendorSub_get", arguments);
    }
  }.vendorSub,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "productSub", {
  configurable: true,
  enumerable: true,
  get: {
    productSub() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "productSub_get", arguments);
    }
  }.productSub,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "vendor", {
  configurable: true,
  enumerable: true,
  get: {
    vendor() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "vendor_get", arguments);
    }
  }.vendor,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "maxTouchPoints", {
  configurable: true,
  enumerable: true,
  get: {
    maxTouchPoints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "maxTouchPoints_get", arguments);
    }
  }.maxTouchPoints,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "scheduling", {
  configurable: true,
  enumerable: true,
  get: {
    scheduling() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "scheduling_get", arguments);
    }
  }.scheduling,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "userActivation", {
  configurable: true,
  enumerable: true,
  get: {
    userActivation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "userActivation_get", arguments);
    }
  }.userActivation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "doNotTrack", {
  configurable: true,
  enumerable: true,
  get: {
    doNotTrack() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "doNotTrack_get", arguments);
    }
  }.doNotTrack,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "geolocation", {
  configurable: true,
  enumerable: true,
  get: {
    geolocation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "geolocation_get", arguments);
    }
  }.geolocation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "connection", {
  configurable: true,
  enumerable: true,
  get: {
    connection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "connection_get", arguments);
    }
  }.connection,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "plugins", {
  configurable: true,
  enumerable: true,
  get: {
    plugins() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "plugins_get", arguments);
    }
  }.plugins,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "mimeTypes", {
  configurable: true,
  enumerable: true,
  get: {
    mimeTypes() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "mimeTypes_get", arguments);
    }
  }.mimeTypes,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "pdfViewerEnabled", {
  configurable: true,
  enumerable: true,
  get: {
    pdfViewerEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "pdfViewerEnabled_get", arguments);
    }
  }.pdfViewerEnabled,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "webkitTemporaryStorage", {
  configurable: true,
  enumerable: true,
  get: {
    webkitTemporaryStorage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "webkitTemporaryStorage_get", arguments);
    }
  }.webkitTemporaryStorage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "webkitPersistentStorage", {
  configurable: true,
  enumerable: true,
  get: {
    webkitPersistentStorage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "webkitPersistentStorage_get", arguments);
    }
  }.webkitPersistentStorage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "hardwareConcurrency", {
  configurable: true,
  enumerable: true,
  get: {
    hardwareConcurrency() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "hardwareConcurrency_get", arguments);
    }
  }.hardwareConcurrency,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "cookieEnabled", {
  configurable: true,
  enumerable: true,
  get: {
    cookieEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "cookieEnabled_get", arguments);
    }
  }.cookieEnabled,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "appCodeName", {
  configurable: true,
  enumerable: true,
  get: {
    appCodeName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "appCodeName_get", arguments);
    }
  }.appCodeName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "appName", {
  configurable: true,
  enumerable: true,
  get: {
    appName() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "appName_get", arguments);
    }
  }.appName,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "appVersion", {
  configurable: true,
  enumerable: true,
  get: {
    appVersion() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "appVersion_get", arguments);
    }
  }.appVersion,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "platform", {
  configurable: true,
  enumerable: true,
  get: {
    platform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "platform_get", arguments);
    }
  }.platform,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "product", {
  configurable: true,
  enumerable: true,
  get: {
    product() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "product_get", arguments);
    }
  }.product,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "userAgent", {
  configurable: true,
  enumerable: true,
  get: {
    userAgent() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "userAgent_get", arguments);
    }
  }.userAgent,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "language", {
  configurable: true,
  enumerable: true,
  get: {
    language() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "language_get", arguments);
    }
  }.language,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "languages", {
  configurable: true,
  enumerable: true,
  get: {
    languages() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "languages_get", arguments);
    }
  }.languages,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "onLine", {
  configurable: true,
  enumerable: true,
  get: {
    onLine() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "onLine_get", arguments);
    }
  }.onLine,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "webdriver", {
  configurable: true,
  enumerable: true,
  get: {
    webdriver() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "webdriver_get", arguments);
    }
  }.webdriver,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "getGamepads", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getGamepads() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "getGamepads", arguments);
    }
  }.getGamepads
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "javaEnabled", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    javaEnabled() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "javaEnabled", arguments);
    }
  }.javaEnabled
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "sendBeacon", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sendBeacon() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "sendBeacon", arguments);
    }
  }.sendBeacon
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "vibrate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    vibrate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "vibrate", arguments);
    }
  }.vibrate
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "bluetooth", {
  configurable: true,
  enumerable: true,
  get: {
    bluetooth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "bluetooth_get", arguments);
    }
  }.bluetooth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "clipboard", {
  configurable: true,
  enumerable: true,
  get: {
    clipboard() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "clipboard_get", arguments);
    }
  }.clipboard,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "credentials", {
  configurable: true,
  enumerable: true,
  get: {
    credentials() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "credentials_get", arguments);
    }
  }.credentials,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "keyboard", {
  configurable: true,
  enumerable: true,
  get: {
    keyboard() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "keyboard_get", arguments);
    }
  }.keyboard,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "managed", {
  configurable: true,
  enumerable: true,
  get: {
    managed() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "managed_get", arguments);
    }
  }.managed,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "mediaDevices", {
  configurable: true,
  enumerable: true,
  get: {
    mediaDevices() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "mediaDevices_get", arguments);
    }
  }.mediaDevices,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "storage", {
  configurable: true,
  enumerable: true,
  get: {
    storage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "storage_get", arguments);
    }
  }.storage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "serviceWorker", {
  configurable: true,
  enumerable: true,
  get: {
    serviceWorker() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "serviceWorker_get", arguments);
    }
  }.serviceWorker,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "virtualKeyboard", {
  configurable: true,
  enumerable: true,
  get: {
    virtualKeyboard() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "virtualKeyboard_get", arguments);
    }
  }.virtualKeyboard,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "wakeLock", {
  configurable: true,
  enumerable: true,
  get: {
    wakeLock() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "wakeLock_get", arguments);
    }
  }.wakeLock,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "deviceMemory", {
  configurable: true,
  enumerable: true,
  get: {
    deviceMemory() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "deviceMemory_get", arguments);
    }
  }.deviceMemory,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "ink", {
  configurable: true,
  enumerable: true,
  get: {
    ink() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "ink_get", arguments);
    }
  }.ink,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "hid", {
  configurable: true,
  enumerable: true,
  get: {
    hid() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "hid_get", arguments);
    }
  }.hid,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "locks", {
  configurable: true,
  enumerable: true,
  get: {
    locks() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "locks_get", arguments);
    }
  }.locks,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "mediaCapabilities", {
  configurable: true,
  enumerable: true,
  get: {
    mediaCapabilities() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "mediaCapabilities_get", arguments);
    }
  }.mediaCapabilities,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "mediaSession", {
  configurable: true,
  enumerable: true,
  get: {
    mediaSession() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "mediaSession_get", arguments);
    }
  }.mediaSession,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "permissions", {
  configurable: true,
  enumerable: true,
  get: {
    permissions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "permissions_get", arguments);
    }
  }.permissions,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "presentation", {
  configurable: true,
  enumerable: true,
  get: {
    presentation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "presentation_get", arguments);
    }
  }.presentation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "serial", {
  configurable: true,
  enumerable: true,
  get: {
    serial() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "serial_get", arguments);
    }
  }.serial,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "gpu", {
  configurable: true,
  enumerable: true,
  get: {
    gpu() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "gpu_get", arguments);
    }
  }.gpu,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "usb", {
  configurable: true,
  enumerable: true,
  get: {
    usb() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "usb_get", arguments);
    }
  }.usb,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "windowControlsOverlay", {
  configurable: true,
  enumerable: true,
  get: {
    windowControlsOverlay() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "windowControlsOverlay_get", arguments);
    }
  }.windowControlsOverlay,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "xr", {
  configurable: true,
  enumerable: true,
  get: {
    xr() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "xr_get", arguments);
    }
  }.xr,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "userAgentData", {
  configurable: true,
  enumerable: true,
  get: {
    userAgentData() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "userAgentData_get", arguments);
    }
  }.userAgentData,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "canShare", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    canShare() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "canShare", arguments);
    }
  }.canShare
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "share", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    share() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "share", arguments);
    }
  }.share
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "clearAppBadge", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clearAppBadge() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "clearAppBadge", arguments);
    }
  }.clearAppBadge
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "getBattery", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getBattery() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "getBattery", arguments);
    }
  }.getBattery
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "getUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUserMedia() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "getUserMedia", arguments);
    }
  }.getUserMedia
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "requestMIDIAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestMIDIAccess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "requestMIDIAccess", arguments);
    }
  }.requestMIDIAccess
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "requestMediaKeySystemAccess", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestMediaKeySystemAccess() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "requestMediaKeySystemAccess", arguments);
    }
  }.requestMediaKeySystemAccess
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "setAppBadge", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setAppBadge() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "setAppBadge", arguments);
    }
  }.setAppBadge
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "webkitGetUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    webkitGetUserMedia() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "webkitGetUserMedia", arguments);
    }
  }.webkitGetUserMedia
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "getInstalledRelatedApps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getInstalledRelatedApps() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "getInstalledRelatedApps", arguments);
    }
  }.getInstalledRelatedApps
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "registerProtocolHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    registerProtocolHandler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "registerProtocolHandler", arguments);
    }
  }.registerProtocolHandler
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Navigator"].prototype, "unregisterProtocolHandler", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unregisterProtocolHandler() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Navigator"].prototype, "Navigator", "unregisterProtocolHandler", arguments);
    }
  }.unregisterProtocolHandler
});

// navigator对象

bodaEnv.memory.globlProtoObj["navigator"] = new bodaEnv.memory.globlProtoObj["Navigator"]('bobo');