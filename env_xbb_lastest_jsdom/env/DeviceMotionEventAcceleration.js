// DeviceMotionEventAcceleration对象

bodavm.memory.globalobj['DeviceMotionEventAcceleration'] = function DeviceMotionEventAcceleration() {
  console.log_copy('DeviceMotionEventAcceleration 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof DeviceMotionEventAcceleration)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DeviceMotionEventAcceleration'], "DeviceMotionEventAcceleration");
bodavm.toolsFunc.defineProperty('DeviceMotionEventAcceleration', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEventAcceleration'].prototype, "DeviceMotionEventAcceleration", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceMotionEventAcceleration', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEventAcceleration'].prototype, "DeviceMotionEventAcceleration", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('DeviceMotionEventAcceleration', "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DeviceMotionEventAcceleration'].prototype, "DeviceMotionEventAcceleration", "z_get", arguments);
  },
  set: undefined
}, 'prototype');