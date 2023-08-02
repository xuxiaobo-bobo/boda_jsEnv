// SerialPort对象

SerialPort = function SerialPort() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SerialPort)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SerialPort 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SerialPort, "SerialPort");
SerialPort.prototype.__proto__ = EventTarget.prototype;
SerialPort.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "onconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "ondisconnect_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "readable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "writable_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "close", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forget() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "forget", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "getInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInfo() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "getInfo", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "getSignals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSignals() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "getSignals", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "open", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SerialPort.prototype, "setSignals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSignals() {
    return bodavm.toolsFunc.dispatch(this, SerialPort.prototype, "SerialPort", "setSignals", arguments);
  }
});