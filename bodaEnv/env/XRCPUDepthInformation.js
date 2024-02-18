// XRCPUDepthInformation对象

bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"] = function XRCPUDepthInformation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRCPUDepthInformation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"], "XRCPUDepthInformation");
bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype;
bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"].__proto__ = bodaEnv.memory.globlProtoObj["XRDepthInformation"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"].prototype, "data", {
  configurable: true,
  enumerable: true,
  get: {
    data() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"].prototype, "XRCPUDepthInformation", "data_get", arguments);
    }
  }.data,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"].prototype, "getDepthInMeters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getDepthInMeters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRCPUDepthInformation"].prototype, "XRCPUDepthInformation", "getDepthInMeters", arguments);
    }
  }.getDepthInMeters
});