// Highlight对象

bodaEnv.memory.globlProtoObj["Highlight"] = function Highlight() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('Highlight 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["Highlight"], "Highlight");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "priority", {
  configurable: true,
  enumerable: true,
  get: {
    priority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "priority_get", arguments);
    }
  }.priority,
  set: {
    priority() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "priority_set", arguments);
    }
  }.priority
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "type", {
  configurable: true,
  enumerable: true,
  get: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "type_get", arguments);
    }
  }.type,
  set: {
    type() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "type_set", arguments);
    }
  }.type
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "add", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    add() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "add", arguments);
    }
  }.add
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "clear", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    clear() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "clear", arguments);
    }
  }.clear
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "delete", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    bodelete() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "bodelete", arguments);
    }
  }.bodelete
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["Highlight"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["Highlight"].prototype, "Highlight", "values", arguments);
    }
  }.values
});