// Blob对象

Blob = function Blob() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('Blob 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(Blob, "Blob");
bodavm.toolsFunc.defineProperty(Blob.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "size_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Blob.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(Blob.prototype, "arrayBuffer", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function arrayBuffer() {
    return bodavm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "arrayBuffer", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Blob.prototype, "slice", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function slice() {
    return bodavm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "slice", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Blob.prototype, "stream", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stream() {
    return bodavm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "stream", arguments);
  }
});
bodavm.toolsFunc.defineProperty(Blob.prototype, "text", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function text() {
    return bodavm.toolsFunc.dispatch(this, Blob.prototype, "Blob", "text", arguments);
  }
});