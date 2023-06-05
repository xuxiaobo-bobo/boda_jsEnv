// Clipboard对象

bodavm.memory.globalobj['Clipboard'] = function Clipboard() {
  console.log_copy('Clipboard 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Clipboard)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Clipboard'], "Clipboard");
bodavm.memory.globalobj['Clipboard'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['Clipboard'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Clipboard', "read", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function read() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Clipboard'].prototype, "Clipboard", "read", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Clipboard', "readText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function readText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Clipboard'].prototype, "Clipboard", "readText", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Clipboard', "write", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function write() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Clipboard'].prototype, "Clipboard", "write", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Clipboard', "writeText", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function writeText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Clipboard'].prototype, "Clipboard", "writeText", arguments);
  }
}, 'prototype');