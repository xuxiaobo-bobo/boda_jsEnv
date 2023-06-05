// HTMLDirectoryElement对象

bodavm.memory.globalobj['HTMLDirectoryElement'] = function HTMLDirectoryElement() {
  console.log_copy('HTMLDirectoryElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLDirectoryElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLDirectoryElement'], "HTMLDirectoryElement");
bodavm.memory.globalobj['HTMLDirectoryElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLDirectoryElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLDirectoryElement', "compact", {
  configurable: true,
  enumerable: true,
  get: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDirectoryElement'].prototype, "HTMLDirectoryElement", "compact_get", arguments);
  },
  set: function compact() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLDirectoryElement'].prototype, "HTMLDirectoryElement", "compact_set", arguments);
  }
}, 'prototype');