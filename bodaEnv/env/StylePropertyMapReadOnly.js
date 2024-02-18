// StylePropertyMapReadOnly对象

bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"] = function StylePropertyMapReadOnly() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('StylePropertyMapReadOnly 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"], "StylePropertyMapReadOnly");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "getAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "getAll", arguments);
    }
  }.getAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["StylePropertyMapReadOnly"].prototype, "StylePropertyMapReadOnly", "values", arguments);
    }
  }.values
});