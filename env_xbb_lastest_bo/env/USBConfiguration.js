// USBConfiguration对象

USBConfiguration = function USBConfiguration() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBConfiguration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBConfiguration': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBConfiguration 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBConfiguration, "USBConfiguration");
bodavm.toolsFunc.defineProperty(USBConfiguration.prototype, "configurationValue", {
  configurable: true,
  enumerable: true,
  get: function configurationValue() {
    return bodavm.toolsFunc.dispatch(this, USBConfiguration.prototype, "USBConfiguration", "configurationValue_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBConfiguration.prototype, "configurationName", {
  configurable: true,
  enumerable: true,
  get: function configurationName() {
    return bodavm.toolsFunc.dispatch(this, USBConfiguration.prototype, "USBConfiguration", "configurationName_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBConfiguration.prototype, "interfaces", {
  configurable: true,
  enumerable: true,
  get: function interfaces() {
    return bodavm.toolsFunc.dispatch(this, USBConfiguration.prototype, "USBConfiguration", "interfaces_get", arguments);
  },
  set: undefined
});