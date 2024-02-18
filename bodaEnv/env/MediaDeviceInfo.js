// MediaDeviceInfo对象

bodaEnv.memory.globlProtoObj["MediaDeviceInfo"] = function MediaDeviceInfo() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaDeviceInfo 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaDeviceInfo"], "MediaDeviceInfo");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "deviceId", {
  configurable: true,
  enumerable: true,
  get: {
    deviceId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "MediaDeviceInfo", "deviceId_get", arguments);
    }
  }.deviceId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "kind", {
  configurable: true,
  enumerable: true,
  get: {
    kind() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "MediaDeviceInfo", "kind_get", arguments);
    }
  }.kind,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "label", {
  configurable: true,
  enumerable: true,
  get: {
    label() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "MediaDeviceInfo", "label_get", arguments);
    }
  }.label,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "groupId", {
  configurable: true,
  enumerable: true,
  get: {
    groupId() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "MediaDeviceInfo", "groupId_get", arguments);
    }
  }.groupId,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    toJSON() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaDeviceInfo"].prototype, "MediaDeviceInfo", "toJSON", arguments);
    }
  }.toJSON
});