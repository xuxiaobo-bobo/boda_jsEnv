// GeolocationCoordinates对象

GeolocationCoordinates = function GeolocationCoordinates() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GeolocationCoordinates)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GeolocationCoordinates 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GeolocationCoordinates, "GeolocationCoordinates");
bodavm.toolsFunc.defineProperty(GeolocationCoordinates.prototype, "latitude", {
  configurable: true,
  enumerable: true,
  get: function latitude() {
    return bodavm.toolsFunc.dispatch(this, GeolocationCoordinates.prototype, "GeolocationCoordinates", "latitude_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationCoordinates.prototype, "longitude", {
  configurable: true,
  enumerable: true,
  get: function longitude() {
    return bodavm.toolsFunc.dispatch(this, GeolocationCoordinates.prototype, "GeolocationCoordinates", "longitude_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationCoordinates.prototype, "altitude", {
  configurable: true,
  enumerable: true,
  get: function altitude() {
    return bodavm.toolsFunc.dispatch(this, GeolocationCoordinates.prototype, "GeolocationCoordinates", "altitude_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationCoordinates.prototype, "accuracy", {
  configurable: true,
  enumerable: true,
  get: function accuracy() {
    return bodavm.toolsFunc.dispatch(this, GeolocationCoordinates.prototype, "GeolocationCoordinates", "accuracy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationCoordinates.prototype, "altitudeAccuracy", {
  configurable: true,
  enumerable: true,
  get: function altitudeAccuracy() {
    return bodavm.toolsFunc.dispatch(this, GeolocationCoordinates.prototype, "GeolocationCoordinates", "altitudeAccuracy_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationCoordinates.prototype, "heading", {
  configurable: true,
  enumerable: true,
  get: function heading() {
    return bodavm.toolsFunc.dispatch(this, GeolocationCoordinates.prototype, "GeolocationCoordinates", "heading_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GeolocationCoordinates.prototype, "speed", {
  configurable: true,
  enumerable: true,
  get: function speed() {
    return bodavm.toolsFunc.dispatch(this, GeolocationCoordinates.prototype, "GeolocationCoordinates", "speed_get", arguments);
  },
  set: undefined
});