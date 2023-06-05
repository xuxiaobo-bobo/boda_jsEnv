// USBEndpoint对象

bodavm.memory.globalobj['USBEndpoint'] = function USBEndpoint() {
  console.log_copy('USBEndpoint 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBEndpoint)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBEndpoint': 3 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBEndpoint'], "USBEndpoint");
bodavm.toolsFunc.defineProperty('USBEndpoint', "endpointNumber", {
  configurable: true,
  enumerable: true,
  get: function endpointNumber() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBEndpoint'].prototype, "USBEndpoint", "endpointNumber_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBEndpoint', "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBEndpoint'].prototype, "USBEndpoint", "direction_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBEndpoint', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBEndpoint'].prototype, "USBEndpoint", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBEndpoint', "packetSize", {
  configurable: true,
  enumerable: true,
  get: function packetSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBEndpoint'].prototype, "USBEndpoint", "packetSize_get", arguments);
  },
  set: undefined
}, 'prototype');