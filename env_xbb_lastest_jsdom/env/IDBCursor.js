// IDBCursor对象

bodavm.memory.globalobj['IDBCursor'] = function IDBCursor() {
  console.log_copy('IDBCursor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof IDBCursor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['IDBCursor'], "IDBCursor");
bodavm.toolsFunc.defineProperty('IDBCursor', "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "source_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "direction_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "key_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "primaryKey", {
  configurable: true,
  enumerable: true,
  get: function primaryKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "primaryKey_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "request", {
  configurable: true,
  enumerable: true,
  get: function request() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "request_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "advance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function advance() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "advance", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "continue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "continue", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "continuePrimaryKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function continuePrimaryKey() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "continuePrimaryKey", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function () {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "delete", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('IDBCursor', "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function update() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['IDBCursor'].prototype, "IDBCursor", "update", arguments);
  }
}, 'prototype');