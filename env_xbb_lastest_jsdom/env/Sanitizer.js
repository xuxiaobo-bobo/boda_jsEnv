// Sanitizer对象

bodavm.memory.globalobj['Sanitizer'] = function Sanitizer() {
  console.log_copy('Sanitizer 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.Sanitizer();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Sanitizer'], "Sanitizer");
bodavm.toolsFunc.defineProperty('Sanitizer', "getDefaultConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDefaultConfiguration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sanitizer'].undefined, "Sanitizer", "getDefaultConfiguration", arguments);
  }
});
bodavm.toolsFunc.defineProperty('Sanitizer', "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConfiguration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Sanitizer'].prototype, "Sanitizer", "getConfiguration", arguments);
  }
}, 'prototype');