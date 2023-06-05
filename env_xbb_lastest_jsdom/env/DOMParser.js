// DOMParser对象

bodavm.memory.globalobj['DOMParser'] = function DOMParser() {
  console.log_copy('DOMParser 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.DOMParser();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['DOMParser'], "DOMParser");
bodavm.toolsFunc.defineProperty('DOMParser', "parseFromString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function parseFromString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['DOMParser'].prototype, "DOMParser", "parseFromString", arguments);
  }
}, 'prototype');