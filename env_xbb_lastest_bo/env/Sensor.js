// Sensor对象

Sensor = function Sensor() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Sensor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Sensor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Sensor, "Sensor");
Sensor.prototype.__proto__ = EventTarget.prototype;
Sensor.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Sensor.prototype, "activated", {
  configurable: true,
  enumerable: true,
  get: function activated() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "activated_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Sensor.prototype, "hasReading", {
  configurable: true,
  enumerable: true,
  get: function hasReading() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "hasReading_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Sensor.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Sensor.prototype, "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onerror_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Sensor.prototype, "onreading", {
  configurable: true,
  enumerable: true,
  get: function onreading() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onreading_get", arguments);
  },
  set: function onreading() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onreading_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Sensor.prototype, "onactivate", {
  configurable: true,
  enumerable: true,
  get: function onactivate() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onactivate_get", arguments);
  },
  set: function onactivate() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "onactivate_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Sensor.prototype, "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "start", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Sensor.prototype, "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, Sensor.prototype, "Sensor", "stop", arguments);
  }
});