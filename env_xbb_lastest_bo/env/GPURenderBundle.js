// GPURenderBundle对象

GPURenderBundle = function GPURenderBundle() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof GPURenderBundle)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('GPURenderBundle 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(GPURenderBundle, "GPURenderBundle");
bodavm.toolsFunc.defineProperty(GPURenderBundle.prototype, "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundle.prototype, "GPURenderBundle", "label_get", arguments);
  },
  set: function label() {
    return bodavm.toolsFunc.dispatch(this, GPURenderBundle.prototype, "GPURenderBundle", "label_set", arguments);
  }
});