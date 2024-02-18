// CustomStateSet对象

bodaEnv.memory.globlProtoObj["CustomStateSet"] = function CustomStateSet() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('CustomStateSet 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["CustomStateSet"], "CustomStateSet");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["CustomStateSet"].prototype, "CustomStateSet", "values", arguments);
    }
  }.values
});