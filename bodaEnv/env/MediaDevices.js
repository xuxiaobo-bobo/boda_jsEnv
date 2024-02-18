// MediaDevices对象

bodaEnv.memory.globlProtoObj["MediaDevices"] = function MediaDevices() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaDevices 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaDevices"], "MediaDevices");
bodaEnv.memory.globlProtoObj["MediaDevices"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"].prototype;
bodaEnv.memory.globlProtoObj["MediaDevices"].__proto__ = bodaEnv.memory.globlProtoObj["EventTarget"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "enumerateDevices", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    enumerateDevices() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "MediaDevices", "enumerateDevices", arguments);
    }
  }.enumerateDevices
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "getSupportedConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSupportedConstraints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "MediaDevices", "getSupportedConstraints", arguments);
    }
  }.getSupportedConstraints
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "getUserMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getUserMedia() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "MediaDevices", "getUserMedia", arguments);
    }
  }.getUserMedia
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "ondevicechange", {
  configurable: true,
  enumerable: true,
  get: {
    ondevicechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "MediaDevices", "ondevicechange_get", arguments);
    }
  }.ondevicechange,
  set: {
    ondevicechange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "MediaDevices", "ondevicechange_set", arguments);
    }
  }.ondevicechange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "getDisplayMedia", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDisplayMedia() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "MediaDevices", "getDisplayMedia", arguments);
    }
  }.getDisplayMedia
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "setCaptureHandleConfig", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCaptureHandleConfig() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDevices"].prototype, "MediaDevices", "setCaptureHandleConfig", arguments);
    }
  }.setCaptureHandleConfig
});