// IDBCursorWithValue对象

bodaEnv.memory.globlProtoObj["IDBCursorWithValue"] = function IDBCursorWithValue() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBCursorWithValue 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBCursorWithValue"], "IDBCursorWithValue");
bodaEnv.memory.globlProtoObj["IDBCursorWithValue"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["IDBCursor"].prototype;
bodaEnv.memory.globlProtoObj["IDBCursorWithValue"].__proto__ = bodaEnv.memory.globlProtoObj["IDBCursor"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursorWithValue"].prototype, "value", {
  configurable: true,
  enumerable: true,
  get: {
    value() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursorWithValue"].prototype, "IDBCursorWithValue", "value_get", arguments);
    }
  }.value,
  set: undefined
});