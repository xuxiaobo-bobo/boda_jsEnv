// AudioListener对象

bodavm.memory.globalobj['AudioListener'] = function AudioListener() {
  console.log_copy('AudioListener 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AudioListener)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AudioListener'], "AudioListener");
bodavm.toolsFunc.defineProperty('AudioListener', "positionX", {
  configurable: true,
  enumerable: true,
  get: function positionX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "positionX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "positionY", {
  configurable: true,
  enumerable: true,
  get: function positionY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "positionY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "positionZ", {
  configurable: true,
  enumerable: true,
  get: function positionZ() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "positionZ_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "forwardX", {
  configurable: true,
  enumerable: true,
  get: function forwardX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "forwardX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "forwardY", {
  configurable: true,
  enumerable: true,
  get: function forwardY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "forwardY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "forwardZ", {
  configurable: true,
  enumerable: true,
  get: function forwardZ() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "forwardZ_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "upX", {
  configurable: true,
  enumerable: true,
  get: function upX() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "upX_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "upY", {
  configurable: true,
  enumerable: true,
  get: function upY() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "upY_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "upZ", {
  configurable: true,
  enumerable: true,
  get: function upZ() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "upZ_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "setOrientation", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "setOrientation", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('AudioListener', "setPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setPosition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AudioListener'].prototype, "AudioListener", "setPosition", arguments);
  }
}, 'prototype');