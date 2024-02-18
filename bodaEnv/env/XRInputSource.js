// XRInputSource对象

bodaEnv.memory.globlProtoObj["XRInputSource"] = function XRInputSource() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRInputSource 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRInputSource"], "XRInputSource");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "handedness", {
  configurable: true,
  enumerable: true,
  get: {
    handedness() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "XRInputSource", "handedness_get", arguments);
    }
  }.handedness,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "targetRayMode", {
  configurable: true,
  enumerable: true,
  get: {
    targetRayMode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "XRInputSource", "targetRayMode_get", arguments);
    }
  }.targetRayMode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "targetRaySpace", {
  configurable: true,
  enumerable: true,
  get: {
    targetRaySpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "XRInputSource", "targetRaySpace_get", arguments);
    }
  }.targetRaySpace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "gripSpace", {
  configurable: true,
  enumerable: true,
  get: {
    gripSpace() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "XRInputSource", "gripSpace_get", arguments);
    }
  }.gripSpace,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "gamepad", {
  configurable: true,
  enumerable: true,
  get: {
    gamepad() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "XRInputSource", "gamepad_get", arguments);
    }
  }.gamepad,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "profiles", {
  configurable: true,
  enumerable: true,
  get: {
    profiles() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRInputSource"].prototype, "XRInputSource", "profiles_get", arguments);
    }
  }.profiles,
  set: undefined
});