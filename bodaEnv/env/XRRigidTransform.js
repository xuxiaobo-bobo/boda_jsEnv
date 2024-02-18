// XRRigidTransform对象

bodaEnv.memory.globlProtoObj["XRRigidTransform"] = function XRRigidTransform() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRRigidTransform 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRRigidTransform"], "XRRigidTransform");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "position", {
  configurable: true,
  enumerable: true,
  get: {
    position() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "XRRigidTransform", "position_get", arguments);
    }
  }.position,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "orientation", {
  configurable: true,
  enumerable: true,
  get: {
    orientation() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "XRRigidTransform", "orientation_get", arguments);
    }
  }.orientation,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: {
    matrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "XRRigidTransform", "matrix_get", arguments);
    }
  }.matrix,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "inverse", {
  configurable: true,
  enumerable: true,
  get: {
    inverse() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRigidTransform"].prototype, "XRRigidTransform", "inverse_get", arguments);
    }
  }.inverse,
  set: undefined
});