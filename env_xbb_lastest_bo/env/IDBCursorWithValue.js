// IDBCursorWithValue对象

IDBCursorWithValue = function IDBCursorWithValue() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof IDBCursorWithValue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('IDBCursorWithValue 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(IDBCursorWithValue, "IDBCursorWithValue");
IDBCursorWithValue.prototype.__proto__ = IDBCursor.prototype;
IDBCursorWithValue.__proto__ = IDBCursor;
bodavm.toolsFunc.defineProperty(IDBCursorWithValue.prototype, "value", {
  configurable: true,
  enumerable: true,
  get: function value() {
    return bodavm.toolsFunc.dispatch(this, IDBCursorWithValue.prototype, "IDBCursorWithValue", "value_get", arguments);
  },
  set: undefined
});