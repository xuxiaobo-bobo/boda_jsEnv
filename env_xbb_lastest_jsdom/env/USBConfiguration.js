// USBConfiguration对象

bodavm.memory.globalobj['USBConfiguration'] = function USBConfiguration() {
  console.log_copy('USBConfiguration 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof USBConfiguration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'USBConfiguration': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['USBConfiguration'], "USBConfiguration");
bodavm.toolsFunc.defineProperty('USBConfiguration', "configurationValue", {
  configurable: true,
  enumerable: true,
  get: function configurationValue() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBConfiguration'].prototype, "USBConfiguration", "configurationValue_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBConfiguration', "configurationName", {
  configurable: true,
  enumerable: true,
  get: function configurationName() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBConfiguration'].prototype, "USBConfiguration", "configurationName_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('USBConfiguration', "interfaces", {
  configurable: true,
  enumerable: true,
  get: function interfaces() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['USBConfiguration'].prototype, "USBConfiguration", "interfaces_get", arguments);
  },
  set: undefined
}, 'prototype');