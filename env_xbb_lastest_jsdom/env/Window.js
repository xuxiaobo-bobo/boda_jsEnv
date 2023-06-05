// Window对象

bodavm.memory.globalobj['Window'] = function Window() {
  console.log_copy('Window 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Window)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
// debugger
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Window'], "Window");
bodavm.memory.globalobj['Window'].prototype.__proto__ = bodavm.memory.globalobj['WindowProperties'].prototype;
bodavm.memory.globalobj['Window'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('Window', "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('Window', "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('Window', "TEMPORARY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('Window', "PERSISTENT", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');

// bodavm.memory.globalobj['Window'] = function Window(){return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor")}
// debugger