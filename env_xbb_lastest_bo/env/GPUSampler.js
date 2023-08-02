// GPUSampler对象

GPUSampler = function GPUSampler() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPUSampler)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPUSampler 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPUSampler, "GPUSampler");
bodavm.toolsFunc.defineProperty(GPUSampler.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUSampler.prototype, "GPUSampler", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPUSampler.prototype, "GPUSampler", "label_set", arguments);
  }
});