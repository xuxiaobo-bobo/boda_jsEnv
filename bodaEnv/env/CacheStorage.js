// CacheStorage对象

bodaEnv.memory.globlProtoObj["CacheStorage"] = function CacheStorage() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CacheStorage 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CacheStorage"], "CacheStorage");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "CacheStorage", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "CacheStorage", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "CacheStorage", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "match", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    match() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "CacheStorage", "match", arguments);
    }
  }.match
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "open", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    open() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CacheStorage"].prototype, "CacheStorage", "open", arguments);
    }
  }.open
});