// Geolocation对象

bodavm.memory.globalobj['Geolocation'] = function Geolocation() {
  console.log_copy('Geolocation 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Geolocation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Geolocation'], "Geolocation");
bodavm.toolsFunc.defineProperty('Geolocation', "clearWatch", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clearWatch() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Geolocation'].prototype, "Geolocation", "clearWatch", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Geolocation', "getCurrentPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCurrentPosition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Geolocation'].prototype, "Geolocation", "getCurrentPosition", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Geolocation', "watchPosition", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function watchPosition() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Geolocation'].prototype, "Geolocation", "watchPosition", arguments);
  }
}, 'prototype');