// Gamepad对象

Gamepad = function Gamepad() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Gamepad)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Gamepad 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Gamepad, "Gamepad");
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "index", {
  configurable: true,
  enumerable: true,
  get: function index() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "index_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "connected", {
  configurable: true,
  enumerable: true,
  get: function connected() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "connected_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "timestamp_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "mapping", {
  configurable: true,
  enumerable: true,
  get: function mapping() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "mapping_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "axes", {
  configurable: true,
  enumerable: true,
  get: function axes() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "axes_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "buttons", {
  configurable: true,
  enumerable: true,
  get: function buttons() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "buttons_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Gamepad.prototype, "vibrationActuator", {
  configurable: true,
  enumerable: true,
  get: function vibrationActuator() {
    return bodavm.toolsFunc.dispatch(this, Gamepad.prototype, "Gamepad", "vibrationActuator_get", arguments);
  },
  set: undefined
});