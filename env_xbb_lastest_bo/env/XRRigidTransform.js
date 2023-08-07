// XRRigidTransform对象

XRRigidTransform = function XRRigidTransform() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRRigidTransform 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRRigidTransform, "XRRigidTransform");
bodavm.toolsFunc.defineProperty(XRRigidTransform.prototype, "position", {
  configurable: true,
  enumerable: true,
  get: function position() {
    return bodavm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "position_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRigidTransform.prototype, "orientation", {
  configurable: true,
  enumerable: true,
  get: function orientation() {
    return bodavm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "orientation_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRigidTransform.prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "matrix_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRRigidTransform.prototype, "inverse", {
  configurable: true,
  enumerable: true,
  get: function inverse() {
    return bodavm.toolsFunc.dispatch(this, XRRigidTransform.prototype, "XRRigidTransform", "inverse_get", arguments);
  },
  set: undefined
});