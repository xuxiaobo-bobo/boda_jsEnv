// GeolocationPositionError对象

bodavm.memory.globalobj['GeolocationPositionError'] = function GeolocationPositionError() {
  console.log_copy('GeolocationPositionError 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof GeolocationPositionError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['GeolocationPositionError'], "GeolocationPositionError");
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "PERMISSION_DENIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "POSITION_UNAVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationPositionError'].prototype, "GeolocationPositionError", "code_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['GeolocationPositionError'].prototype, "GeolocationPositionError", "message_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "PERMISSION_DENIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "POSITION_UNAVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');
bodavm.toolsFunc.defineProperty('GeolocationPositionError', "TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
}, 'prototype');