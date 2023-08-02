// GeolocationPositionError对象

GeolocationPositionError = function GeolocationPositionError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GeolocationPositionError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GeolocationPositionError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GeolocationPositionError, "GeolocationPositionError");
bodavm.toolsFunc.defineProperty(GeolocationPositionError, "PERMISSION_DENIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(GeolocationPositionError, "POSITION_UNAVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(GeolocationPositionError, "TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, GeolocationPositionError.prototype, "GeolocationPositionError", "code_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, GeolocationPositionError.prototype, "GeolocationPositionError", "message_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "PERMISSION_DENIED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "POSITION_UNAVAILABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(GeolocationPositionError.prototype, "TIMEOUT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});