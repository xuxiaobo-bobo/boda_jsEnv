// AudioParamMap对象

AudioParamMap = function AudioParamMap() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof AudioParamMap)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('AudioParamMap 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(AudioParamMap, "AudioParamMap");
bodavm.toolsFunc.defineProperty(AudioParamMap.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, AudioParamMap.prototype, "AudioParamMap", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(AudioParamMap.prototype, "entries", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function entries() {
    return bodavm.toolsFunc.dispatch(this, AudioParamMap.prototype, "AudioParamMap", "entries", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParamMap.prototype, "forEach", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forEach() {
    return bodavm.toolsFunc.dispatch(this, AudioParamMap.prototype, "AudioParamMap", "forEach", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParamMap.prototype, "get", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function get() {
    return bodavm.toolsFunc.dispatch(this, AudioParamMap.prototype, "AudioParamMap", "get", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParamMap.prototype, "has", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function has() {
    return bodavm.toolsFunc.dispatch(this, AudioParamMap.prototype, "AudioParamMap", "has", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParamMap.prototype, "keys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function keys() {
    return bodavm.toolsFunc.dispatch(this, AudioParamMap.prototype, "AudioParamMap", "keys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(AudioParamMap.prototype, "values", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function values() {
    return bodavm.toolsFunc.dispatch(this, AudioParamMap.prototype, "AudioParamMap", "values", arguments);
  }
});