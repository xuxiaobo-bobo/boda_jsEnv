// IDBCursorWithValue对象

bodavm.memory.globalobj['IDBCursorWithValue'] = function IDBCursorWithValue() {
  console.log_copy('IDBCursorWithValue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBCursorWithValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBCursorWithValue'], "IDBCursorWithValue");
bodavm.memory.globalobj['IDBCursorWithValue'].prototype.__proto__ = bodavm.memory.globalobj['IDBCursor'].prototype;
bodavm.memory.globalobj['IDBCursorWithValue'].__proto__ = bodavm.memory.globalobj['IDBCursor'];
bodavm.toolsFunc.defineProperty('IDBCursorWithValue', "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursorWithValue'].prototype, "IDBCursorWithValue", "value_get", arguments);
  },
  set: undefined
}, 'prototype');