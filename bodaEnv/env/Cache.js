// Cache对象

bodaEnv.memory.globlProtoObj["Cache"] = function Cache() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Cache 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Cache"], "Cache");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Cache"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Cache"].prototype, "Cache", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Cache"].prototype, "addAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Cache"].prototype, "Cache", "addAll", arguments);
    }
  }.addAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Cache"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Cache"].prototype, "Cache", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Cache"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Cache"].prototype, "Cache", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Cache"].prototype, "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    match() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Cache"].prototype, "Cache", "match", arguments);
    }
  }.match
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Cache"].prototype, "matchAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    matchAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Cache"].prototype, "Cache", "matchAll", arguments);
    }
  }.matchAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Cache"].prototype, "put", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    put() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Cache"].prototype, "Cache", "put", arguments);
    }
  }.put
});