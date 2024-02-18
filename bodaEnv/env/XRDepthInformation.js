// XRDepthInformation对象

bodaEnv.memory.globlProtoObj["XRDepthInformation"] = function XRDepthInformation() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRDepthInformation 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRDepthInformation"], "XRDepthInformation");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "XRDepthInformation", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "XRDepthInformation", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "normDepthBufferFromNormView", {
  configurable: true,
  enumerable: true,
  get: {
    normDepthBufferFromNormView() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "XRDepthInformation", "normDepthBufferFromNormView_get", arguments);
    }
  }.normDepthBufferFromNormView,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "rawValueToMeters", {
  configurable: true,
  enumerable: true,
  get: {
    rawValueToMeters() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRDepthInformation"].prototype, "XRDepthInformation", "rawValueToMeters_get", arguments);
    }
  }.rawValueToMeters,
  set: undefined
});