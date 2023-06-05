// InputDeviceInfo对象

bodavm.memory.globalobj['InputDeviceInfo'] = function InputDeviceInfo() {
  console.log_copy('InputDeviceInfo 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof InputDeviceInfo)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['InputDeviceInfo'], "InputDeviceInfo");
bodavm.memory.globalobj['InputDeviceInfo'].prototype.__proto__ = bodavm.memory.globalobj['MediaDeviceInfo'].prototype;
bodavm.memory.globalobj['InputDeviceInfo'].__proto__ = bodavm.memory.globalobj['MediaDeviceInfo'];
bodavm.toolsFunc.defineProperty('InputDeviceInfo', "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputDeviceInfo'].prototype, "InputDeviceInfo", "getCapabilities", arguments);
  }
}, 'prototype');