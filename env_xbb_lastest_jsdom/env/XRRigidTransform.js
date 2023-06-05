// XRRigidTransform对象

bodavm.memory.globalobj['XRRigidTransform'] = function XRRigidTransform() {
  console.log_copy('XRRigidTransform 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.XRRigidTransform();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRRigidTransform'], "XRRigidTransform");
bodavm.toolsFunc.defineProperty('XRRigidTransform', "position", {
  configurable: true,
  enumerable: true,
  get: function position() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRigidTransform'].prototype, "XRRigidTransform", "position_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRRigidTransform', "orientation", {
  configurable: true,
  enumerable: true,
  get: function orientation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRigidTransform'].prototype, "XRRigidTransform", "orientation_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRRigidTransform', "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRigidTransform'].prototype, "XRRigidTransform", "matrix_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRRigidTransform', "inverse", {
  configurable: true,
  enumerable: true,
  get: function inverse() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRRigidTransform'].prototype, "XRRigidTransform", "inverse_get", arguments);
  },
  set: undefined
}, 'prototype');