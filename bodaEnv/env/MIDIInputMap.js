// MIDIInputMap对象

bodaEnv.memory.globlProtoObj["MIDIInputMap"] = function MIDIInputMap() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MIDIInputMap 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MIDIInputMap"], "MIDIInputMap");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "MIDIInputMap", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "MIDIInputMap", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "MIDIInputMap", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "MIDIInputMap", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "MIDIInputMap", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "MIDIInputMap", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIInputMap"].prototype, "MIDIInputMap", "values", arguments);
    }
  }.values
});