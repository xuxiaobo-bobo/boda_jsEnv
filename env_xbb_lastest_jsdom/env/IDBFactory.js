// IDBFactory对象

bodavm.memory.globalobj['IDBFactory'] = function IDBFactory() {
  console.log_copy('IDBFactory 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBFactory)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBFactory'], "IDBFactory");
bodavm.toolsFunc.defineProperty('IDBFactory', "cmp", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cmp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "cmp", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBFactory', "databases", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function databases() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "databases", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBFactory', "deleteDatabase", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteDatabase() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "deleteDatabase", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBFactory', "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function open() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBFactory'].prototype, "IDBFactory", "open", arguments);
  }
}, 'prototype');