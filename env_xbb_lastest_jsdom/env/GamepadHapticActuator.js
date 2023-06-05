// GamepadHapticActuator对象

bodavm.memory.globalobj['GamepadHapticActuator'] = function GamepadHapticActuator() {
  console.log_copy('GamepadHapticActuator 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof GamepadHapticActuator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GamepadHapticActuator'], "GamepadHapticActuator");
bodavm.toolsFunc.defineProperty('GamepadHapticActuator', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GamepadHapticActuator'].prototype, "GamepadHapticActuator", "type_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GamepadHapticActuator', "playEffect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function playEffect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GamepadHapticActuator'].prototype, "GamepadHapticActuator", "playEffect", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('GamepadHapticActuator', "reset", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function reset() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GamepadHapticActuator'].prototype, "GamepadHapticActuator", "reset", arguments);
  }
}, 'prototype');