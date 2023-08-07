// XRRay对象

XRRay = function XRRay() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRRay 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRRay, "XRRay");
bodavm.toolsFunc.defineProperty(XRRay.prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: function origin() {
    return bodavm.toolsFunc.dispatch(this, XRRay.prototype, "XRRay", "origin_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRay.prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: function direction() {
    return bodavm.toolsFunc.dispatch(this, XRRay.prototype, "XRRay", "direction_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRay.prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, XRRay.prototype, "XRRay", "matrix_get", arguments);
  },
  set: undefined
});