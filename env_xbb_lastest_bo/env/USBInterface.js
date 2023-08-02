// USBInterface对象

USBInterface = function USBInterface() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBInterface)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBInterface': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBInterface 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBInterface, "USBInterface");
bodavm.toolsFunc.defineProperty(USBInterface.prototype, "interfaceNumber", {
  configurable: true,
  enumerable: true,
  get: function interfaceNumber() {
    return bodavm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "interfaceNumber_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBInterface.prototype, "alternate", {
  configurable: true,
  enumerable: true,
  get: function alternate() {
    return bodavm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "alternate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBInterface.prototype, "alternates", {
  configurable: true,
  enumerable: true,
  get: function alternates() {
    return bodavm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "alternates_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBInterface.prototype, "claimed", {
  configurable: true,
  enumerable: true,
  get: function claimed() {
    return bodavm.toolsFunc.dispatch(this, USBInterface.prototype, "USBInterface", "claimed_get", arguments);
  },
  set: undefined
});