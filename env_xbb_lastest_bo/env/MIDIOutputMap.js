// MIDIOutputMap对象

MIDIOutputMap = function MIDIOutputMap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MIDIOutputMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MIDIOutputMap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MIDIOutputMap, "MIDIOutputMap");
bodavm.toolsFunc.defineProperty(MIDIOutputMap.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutputMap.prototype, "MIDIOutputMap", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MIDIOutputMap.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutputMap.prototype, "MIDIOutputMap", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIOutputMap.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutputMap.prototype, "MIDIOutputMap", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIOutputMap.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutputMap.prototype, "MIDIOutputMap", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIOutputMap.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutputMap.prototype, "MIDIOutputMap", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIOutputMap.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutputMap.prototype, "MIDIOutputMap", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MIDIOutputMap.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, MIDIOutputMap.prototype, "MIDIOutputMap", "values", arguments);
  }
});