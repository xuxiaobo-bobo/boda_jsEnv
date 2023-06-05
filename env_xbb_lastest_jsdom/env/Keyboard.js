// Keyboard对象

bodavm.memory.globalobj['Keyboard'] = function Keyboard() {
  console.log_copy('Keyboard 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Keyboard)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Keyboard'], "Keyboard");
bodavm.toolsFunc.defineProperty('Keyboard', "getLayoutMap", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getLayoutMap() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Keyboard'].prototype, "Keyboard", "getLayoutMap", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Keyboard', "lock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function lock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Keyboard'].prototype, "Keyboard", "lock", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('Keyboard', "unlock", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unlock() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Keyboard'].prototype, "Keyboard", "unlock", arguments);
  }
}, 'prototype');