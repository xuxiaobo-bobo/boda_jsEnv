// Serial对象

Serial = function Serial() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof Serial)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Serial 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Serial, "Serial");
Serial.prototype.__proto__ = EventTarget.prototype;
Serial.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(Serial.prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "onconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Serial.prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "ondisconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Serial.prototype, "getPorts", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPorts() {
    return bodavm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "getPorts", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Serial.prototype, "requestPort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPort() {
    return bodavm.toolsFunc.dispatch(this, Serial.prototype, "Serial", "requestPort", arguments);
  }
});