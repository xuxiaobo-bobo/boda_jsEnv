// URLSearchParams对象

bodaEnv.memory.globlProtoObj["URLSearchParams"] = function URLSearchParams() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('URLSearchParams 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["URLSearchParams"], "URLSearchParams");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "append", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    append() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "append", arguments);
    }
  }.append
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "getAll", arguments);
    }
  }.getAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "set", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    set() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "set", arguments);
    }
  }.set
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "sort", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sort() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "sort", arguments);
    }
  }.sort
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toString() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "toString", arguments);
    }
  }.toString
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["URLSearchParams"].prototype, "URLSearchParams", "values", arguments);
    }
  }.values
});