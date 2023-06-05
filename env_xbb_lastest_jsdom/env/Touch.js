// Touch对象

bodavm.memory.globalobj['Touch'] = function Touch() {
  console.log_copy('Touch 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Touch)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'Touch': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Touch'], "Touch");
bodavm.toolsFunc.defineProperty('Touch', "identifier", {
  configurable: true,
  enumerable: true,
  get: function identifier() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "identifier_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "target", {
  configurable: true,
  enumerable: true,
  get: function target() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "target_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "screenX", {
  configurable: true,
  enumerable: true,
  get: function screenX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "screenX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "screenY", {
  configurable: true,
  enumerable: true,
  get: function screenY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "screenY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "clientX", {
  configurable: true,
  enumerable: true,
  get: function clientX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "clientX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "clientY", {
  configurable: true,
  enumerable: true,
  get: function clientY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "clientY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "pageX", {
  configurable: true,
  enumerable: true,
  get: function pageX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "pageX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "pageY", {
  configurable: true,
  enumerable: true,
  get: function pageY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "pageY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "radiusX", {
  configurable: true,
  enumerable: true,
  get: function radiusX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "radiusX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "radiusY", {
  configurable: true,
  enumerable: true,
  get: function radiusY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "radiusY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "rotationAngle", {
  configurable: true,
  enumerable: true,
  get: function rotationAngle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "rotationAngle_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('Touch', "force", {
  configurable: true,
  enumerable: true,
  get: function force() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Touch'].prototype, "Touch", "force_get", arguments);
  },
  set: undefined
}, 'prototype');