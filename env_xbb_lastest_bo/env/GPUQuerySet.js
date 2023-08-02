// GPUQuerySet对象

GPUQuerySet = function GPUQuerySet() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUQuerySet)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUQuerySet 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUQuerySet, "GPUQuerySet");
bodavm.toolsFunc.defineProperty(GPUQuerySet.prototype, "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, GPUQuerySet.prototype, "GPUQuerySet", "type_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUQuerySet.prototype, "count", {
  configurable: true,
  enumerable: true,
  get: function count() {
    return bodavm.toolsFunc.dispatch(this, GPUQuerySet.prototype, "GPUQuerySet", "count_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(GPUQuerySet.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUQuerySet.prototype, "GPUQuerySet", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUQuerySet.prototype, "GPUQuerySet", "label_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(GPUQuerySet.prototype, "destroy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function destroy() {
    return bodavm.toolsFunc.dispatch(this, GPUQuerySet.prototype, "GPUQuerySet", "destroy", arguments);
  }
});