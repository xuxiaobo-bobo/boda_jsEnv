// Serial对象

bodavm.memory.globalobj['Serial'] = function Serial() {
  console.log_copy('Serial 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Serial)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Serial'], "Serial");
bodavm.memory.globalobj['Serial'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Serial'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Serial', "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Serial'].prototype, "Serial", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Serial'].prototype, "Serial", "onconnect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Serial', "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Serial'].prototype, "Serial", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Serial'].prototype, "Serial", "ondisconnect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Serial', "getPorts", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPorts() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Serial'].prototype, "Serial", "getPorts", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Serial', "requestPort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestPort() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Serial'].prototype, "Serial", "requestPort", arguments);
  }
}, 'prototype');