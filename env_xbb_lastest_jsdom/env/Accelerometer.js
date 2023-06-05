// Accelerometer对象

bodavm.memory.globalobj['Accelerometer'] = function Accelerometer() {
  console.log_copy('Accelerometer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Accelerometer();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Accelerometer'], "Accelerometer");
bodavm.memory.globalobj['Accelerometer'].prototype.__proto__ = bodavm.memory.globalobj['Sensor'].prototype;
bodavm.memory.globalobj['Accelerometer'].__proto__ = bodavm.memory.globalobj['Sensor'];
bodavm.toolsFunc.defineProperty('Accelerometer', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Accelerometer'].prototype, "Accelerometer", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Accelerometer', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Accelerometer'].prototype, "Accelerometer", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Accelerometer', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Accelerometer'].prototype, "Accelerometer", "z_get", arguments);
  },
  set: undefined
}, 'prototype');