// MIDIInputMap对象

MIDIInputMap = function MIDIInputMap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MIDIInputMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MIDIInputMap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MIDIInputMap, "MIDIInputMap");
bodavm.toolsFunc.defineProperty(MIDIInputMap.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, MIDIInputMap.prototype, "MIDIInputMap", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIInputMap.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, MIDIInputMap.prototype, "MIDIInputMap", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIInputMap.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, MIDIInputMap.prototype, "MIDIInputMap", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIInputMap.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, MIDIInputMap.prototype, "MIDIInputMap", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIInputMap.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, MIDIInputMap.prototype, "MIDIInputMap", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIInputMap.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, MIDIInputMap.prototype, "MIDIInputMap", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIInputMap.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, MIDIInputMap.prototype, "MIDIInputMap", "values", arguments);
  }
});