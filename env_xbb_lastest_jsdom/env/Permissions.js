// Permissions对象

bodavm.memory.globalobj['Permissions'] = function Permissions() {
  console.log_copy('Permissions 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof Permissions)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['Permissions'], "Permissions");
bodavm.toolsFunc.defineProperty('Permissions', "query", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function query() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['Permissions'].prototype, "Permissions", "query", arguments);
  }
}, 'prototype');