// Headers对象

bodaEnv.memory.globlProtoObj["Headers"] = function Headers() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Headers 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Headers"], "Headers");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    append() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "append", arguments);
    }
  }.append
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "getSetCookie", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSetCookie() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "getSetCookie", arguments);
    }
  }.getSetCookie
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    set() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "set", arguments);
    }
  }.set
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Headers"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Headers"].prototype, "Headers", "values", arguments);
    }
  }.values
});