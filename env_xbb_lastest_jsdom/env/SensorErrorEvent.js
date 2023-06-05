// SensorErrorEvent对象

bodavm.memory.globalobj['SensorErrorEvent'] = function SensorErrorEvent() {
  console.log_copy('SensorErrorEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SensorErrorEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'SensorErrorEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SensorErrorEvent'], "SensorErrorEvent");
bodavm.memory.globalobj['SensorErrorEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['SensorErrorEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('SensorErrorEvent', "error", {
  configurable: true,
  enumerable: true,
  get: function error() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SensorErrorEvent'].prototype, "SensorErrorEvent", "error_get", arguments);
  },
  set: undefined
}, 'prototype');