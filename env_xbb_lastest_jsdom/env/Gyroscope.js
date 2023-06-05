// Gyroscope对象

bodavm.memory.globalobj['Gyroscope'] = function Gyroscope() {
  console.log_copy('Gyroscope 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Gyroscope();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Gyroscope'], "Gyroscope");
bodavm.memory.globalobj['Gyroscope'].prototype.__proto__ = bodavm.memory.globalobj['Sensor'].prototype;
bodavm.memory.globalobj['Gyroscope'].__proto__ = bodavm.memory.globalobj['Sensor'];
bodavm.toolsFunc.defineProperty('Gyroscope', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gyroscope'].prototype, "Gyroscope", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gyroscope', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gyroscope'].prototype, "Gyroscope", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gyroscope', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gyroscope'].prototype, "Gyroscope", "z_get", arguments);
  },
  set: undefined
}, 'prototype');