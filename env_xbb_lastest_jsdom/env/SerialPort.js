// SerialPort对象

bodavm.memory.globalobj['SerialPort'] = function SerialPort() {
  console.log_copy('SerialPort 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SerialPort)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SerialPort'], "SerialPort");
bodavm.memory.globalobj['SerialPort'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['SerialPort'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('SerialPort', "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "onconnect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "ondisconnect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "readable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "writable_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "forget", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forget() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "forget", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "getInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInfo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "getInfo", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "getSignals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSignals() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "getSignals", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "open", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SerialPort', "setSignals", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setSignals() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SerialPort'].prototype, "SerialPort", "setSignals", arguments);
  }
}, 'prototype');