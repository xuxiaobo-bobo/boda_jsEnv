// Gyroscope对象

Gyroscope = function Gyroscope() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Gyroscope 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Gyroscope, "Gyroscope");
Gyroscope.prototype.__proto__ = Sensor.prototype;
Gyroscope.__proto__ = Sensor;
bodavm.toolsFunc.defineProperty(Gyroscope.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, Gyroscope.prototype, "Gyroscope", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gyroscope.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, Gyroscope.prototype, "Gyroscope", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gyroscope.prototype, "z", {
  configurable: true,
  enumerable: true,
  get: function z() {
    return bodavm.toolsFunc.dispatch(this, Gyroscope.prototype, "Gyroscope", "z_get", arguments);
  },
  set: undefined
});