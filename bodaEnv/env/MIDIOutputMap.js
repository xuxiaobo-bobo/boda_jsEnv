// MIDIOutputMap对象

bodaEnv.memory.globlProtoObj["MIDIOutputMap"] = function MIDIOutputMap() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MIDIOutputMap 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MIDIOutputMap"], "MIDIOutputMap");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "size", {
  configurable: true,
  enumerable: true,
  get: {
    size() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "MIDIOutputMap", "size_get", arguments);
    }
  }.size,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    entries() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "MIDIOutputMap", "entries", arguments);
    }
  }.entries
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forEach() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "MIDIOutputMap", "forEach", arguments);
    }
  }.forEach
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    get() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "MIDIOutputMap", "get", arguments);
    }
  }.get
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    has() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "MIDIOutputMap", "has", arguments);
    }
  }.has
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    keys() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "MIDIOutputMap", "keys", arguments);
    }
  }.keys
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    values() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MIDIOutputMap"].prototype, "MIDIOutputMap", "values", arguments);
    }
  }.values
});