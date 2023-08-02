// GeolocationPosition对象

GeolocationPosition = function GeolocationPosition() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GeolocationPosition)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GeolocationPosition 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GeolocationPosition, "GeolocationPosition");
bodavm.toolsFunc.defineProperty(GeolocationPosition.prototype, "coords", {
  configurable: true,
  enumerable: true,
  get: function coords() {
    return bodavm.toolsFunc.dispatch(this, GeolocationPosition.prototype, "GeolocationPosition", "coords_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationPosition.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, GeolocationPosition.prototype, "GeolocationPosition", "timestamp_get", arguments);
  },
  set: undefined
});