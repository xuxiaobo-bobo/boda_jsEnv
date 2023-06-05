// InputDeviceCapabilities对象

bodavm.memory.globalobj['InputDeviceCapabilities'] = function InputDeviceCapabilities() {
  console.log_copy('InputDeviceCapabilities 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.InputDeviceCapabilities();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['InputDeviceCapabilities'], "InputDeviceCapabilities");
bodavm.toolsFunc.defineProperty('InputDeviceCapabilities', "firesTouchEvents", {
  configurable: true,
  enumerable: true,
  get: function firesTouchEvents() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['InputDeviceCapabilities'].prototype, "InputDeviceCapabilities", "firesTouchEvents_get", arguments);
  },
  set: undefined
}, 'prototype');