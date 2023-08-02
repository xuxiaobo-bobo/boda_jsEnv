// Geolocation对象

Geolocation = function Geolocation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Geolocation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Geolocation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Geolocation, "Geolocation");
bodavm.toolsFunc.defineProperty(Geolocation.prototype, "clearWatch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearWatch() {
    return bodavm.toolsFunc.dispatch(this, Geolocation.prototype, "Geolocation", "clearWatch", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Geolocation.prototype, "getCurrentPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCurrentPosition() {
    return bodavm.toolsFunc.dispatch(this, Geolocation.prototype, "Geolocation", "getCurrentPosition", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Geolocation.prototype, "watchPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function watchPosition() {
    return bodavm.toolsFunc.dispatch(this, Geolocation.prototype, "Geolocation", "watchPosition", arguments);
  }
});