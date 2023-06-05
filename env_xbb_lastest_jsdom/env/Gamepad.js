// Gamepad对象

bodavm.memory.globalobj['Gamepad'] = function Gamepad() {
  console.log_copy('Gamepad 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Gamepad)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Gamepad'], "Gamepad");
bodavm.toolsFunc.defineProperty('Gamepad', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gamepad', "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "index_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gamepad', "connected", {
  configurable: true,
  enumerable: true,
  get: function connected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "connected_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gamepad', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gamepad', "mapping", {
  configurable: true,
  enumerable: true,
  get: function mapping() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "mapping_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gamepad', "axes", {
  configurable: true,
  enumerable: true,
  get: function axes() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "axes_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gamepad', "buttons", {
  configurable: true,
  enumerable: true,
  get: function buttons() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "buttons_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Gamepad', "vibrationActuator", {
  configurable: true,
  enumerable: true,
  get: function vibrationActuator() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Gamepad'].prototype, "Gamepad", "vibrationActuator_get", arguments);
  },
  set: undefined
}, 'prototype');