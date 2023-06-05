// USBIsochronousInTransferPacket对象

bodavm.memory.globalobj['USBIsochronousInTransferPacket'] = function USBIsochronousInTransferPacket() {
  console.log_copy('USBIsochronousInTransferPacket 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBIsochronousInTransferPacket)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBIsochronousInTransferPacket': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBIsochronousInTransferPacket'], "USBIsochronousInTransferPacket");
bodavm.toolsFunc.defineProperty('USBIsochronousInTransferPacket', "status", {
  configurable: true,
  enumerable: true,
  get: function status() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBIsochronousInTransferPacket'].prototype, "USBIsochronousInTransferPacket", "status_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBIsochronousInTransferPacket', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBIsochronousInTransferPacket'].prototype, "USBIsochronousInTransferPacket", "data_get", arguments);
  },
  set: undefined
}, 'prototype');