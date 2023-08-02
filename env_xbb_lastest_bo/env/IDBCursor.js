// IDBCursor对象

IDBCursor = function IDBCursor() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBCursor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBCursor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBCursor, "IDBCursor");
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "source", {
  configurable: true,
  enumerable: true,
  get: function source() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "source_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "direction_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "key", {
  configurable: true,
  enumerable: true,
  get: function key() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "key_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "primaryKey", {
  configurable: true,
  enumerable: true,
  get: function primaryKey() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "primaryKey_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "request", {
  configurable: true,
  enumerable: true,
  get: function request() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "request_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "advance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function advance() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "advance", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "continue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bocontinue() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "continue", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "continuePrimaryKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function continuePrimaryKey() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "continuePrimaryKey", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function bodelete() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "delete", arguments);
  }
});
bodavm.toolsFunc.defineProperty(IDBCursor.prototype, "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function update() {
    return bodavm.toolsFunc.dispatch(this, IDBCursor.prototype, "IDBCursor", "update", arguments);
  }
});