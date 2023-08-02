// USBEndpoint对象

USBEndpoint = function USBEndpoint() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof USBEndpoint)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBEndpoint': 3 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('USBEndpoint 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(USBEndpoint, "USBEndpoint");
bodavm.toolsFunc.defineProperty(USBEndpoint.prototype, "endpointNumber", {
  configurable: true,
  enumerable: true,
  get: function endpointNumber() {
    return bodavm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "endpointNumber_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBEndpoint.prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "direction_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBEndpoint.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(USBEndpoint.prototype, "packetSize", {
  configurable: true,
  enumerable: true,
  get: function packetSize() {
    return bodavm.toolsFunc.dispatch(this, USBEndpoint.prototype, "USBEndpoint", "packetSize_get", arguments);
  },
  set: undefined
});