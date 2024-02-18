// XRRay对象

bodaEnv.memory.globlProtoObj["XRRay"] = function XRRay() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRRay 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRRay"], "XRRay");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRay"].prototype, "origin", {
  configurable: true,
  enumerable: true,
  get: {
    origin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRay"].prototype, "XRRay", "origin_get", arguments);
    }
  }.origin,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRay"].prototype, "direction", {
  configurable: true,
  enumerable: true,
  get: {
    direction() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRay"].prototype, "XRRay", "direction_get", arguments);
    }
  }.direction,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRRay"].prototype, "matrix", {
  configurable: true,
  enumerable: true,
  get: {
    matrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRRay"].prototype, "XRRay", "matrix_get", arguments);
    }
  }.matrix,
  set: undefined
});