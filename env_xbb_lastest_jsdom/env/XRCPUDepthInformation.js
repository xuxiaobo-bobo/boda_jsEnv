// XRCPUDepthInformation对象

bodavm.memory.globalobj['XRCPUDepthInformation'] = function XRCPUDepthInformation() {
  console.log_copy('XRCPUDepthInformation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRCPUDepthInformation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRCPUDepthInformation'], "XRCPUDepthInformation");
bodavm.memory.globalobj['XRCPUDepthInformation'].prototype.__proto__ = bodavm.memory.globalobj['XRDepthInformation'].prototype;
bodavm.memory.globalobj['XRCPUDepthInformation'].__proto__ = bodavm.memory.globalobj['XRDepthInformation'];
bodavm.toolsFunc.defineProperty('XRCPUDepthInformation', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRCPUDepthInformation'].prototype, "XRCPUDepthInformation", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRCPUDepthInformation', "getDepthInMeters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDepthInMeters() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRCPUDepthInformation'].prototype, "XRCPUDepthInformation", "getDepthInMeters", arguments);
  }
}, 'prototype');