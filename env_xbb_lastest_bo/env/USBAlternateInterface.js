// USBAlternateInterface对象

USBAlternateInterface = function USBAlternateInterface() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBAlternateInterface)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBAlternateInterface': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBAlternateInterface 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBAlternateInterface, "USBAlternateInterface");
bodavm.toolsFunc.defineProperty(USBAlternateInterface.prototype, "alternateSetting", {
  configurable: true,
  enumerable: true,
  get: function alternateSetting() {
    return bodavm.toolsFunc.dispatch(this, USBAlternateInterface.prototype, "USBAlternateInterface", "alternateSetting_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBAlternateInterface.prototype, "interfaceClass", {
  configurable: true,
  enumerable: true,
  get: function interfaceClass() {
    return bodavm.toolsFunc.dispatch(this, USBAlternateInterface.prototype, "USBAlternateInterface", "interfaceClass_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBAlternateInterface.prototype, "interfaceSubclass", {
  configurable: true,
  enumerable: true,
  get: function interfaceSubclass() {
    return bodavm.toolsFunc.dispatch(this, USBAlternateInterface.prototype, "USBAlternateInterface", "interfaceSubclass_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBAlternateInterface.prototype, "interfaceProtocol", {
  configurable: true,
  enumerable: true,
  get: function interfaceProtocol() {
    return bodavm.toolsFunc.dispatch(this, USBAlternateInterface.prototype, "USBAlternateInterface", "interfaceProtocol_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBAlternateInterface.prototype, "interfaceName", {
  configurable: true,
  enumerable: true,
  get: function interfaceName() {
    return bodavm.toolsFunc.dispatch(this, USBAlternateInterface.prototype, "USBAlternateInterface", "interfaceName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBAlternateInterface.prototype, "endpoints", {
  configurable: true,
  enumerable: true,
  get: function endpoints() {
    return bodavm.toolsFunc.dispatch(this, USBAlternateInterface.prototype, "USBAlternateInterface", "endpoints_get", arguments);
  },
  set: undefined
});