// IDBCursor对象

bodaEnv.memory.globlProtoObj["IDBCursor"] = function IDBCursor() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('IDBCursor 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["IDBCursor"], "IDBCursor");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "source", {
  configurable: true,
  enumerable: true,
  get: {
    source() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "source_get", arguments);
    }
  }.source,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "direction_get", arguments);
    }
  }.direction,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "key", {
  configurable: true,
  enumerable: true,
  get: {
    key() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "key_get", arguments);
    }
  }.key,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "primaryKey", {
  configurable: true,
  enumerable: true,
  get: {
    primaryKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "primaryKey_get", arguments);
    }
  }.primaryKey,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "request", {
  configurable: true,
  enumerable: true,
  get: {
    request() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "request_get", arguments);
    }
  }.request,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "advance", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    advance() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "advance", arguments);
    }
  }.advance
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "continue", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bocontinue() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "bocontinue", arguments);
    }
  }.bocontinue
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "continuePrimaryKey", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    continuePrimaryKey() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "continuePrimaryKey", arguments);
    }
  }.continuePrimaryKey
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    update() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["IDBCursor"].prototype, "IDBCursor", "update", arguments);
    }
  }.update
});