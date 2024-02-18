// KeyboardLayoutMap对象

bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"] = function KeyboardLayoutMap() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('KeyboardLayoutMap 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"], "KeyboardLayoutMap");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "KeyboardLayoutMap", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "KeyboardLayoutMap", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "KeyboardLayoutMap", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "KeyboardLayoutMap", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "KeyboardLayoutMap", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "KeyboardLayoutMap", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["KeyboardLayoutMap"].prototype, "KeyboardLayoutMap", "values", arguments);
    }
  }.values
});