// XRViewerPose对象

bodaEnv.memory.globlProtoObj["XRViewerPose"] = function XRViewerPose() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('XRViewerPose 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["XRViewerPose"], "XRViewerPose");
bodaEnv.memory.globlProtoObj["XRViewerPose"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["XRPose"].prototype;
bodaEnv.memory.globlProtoObj["XRViewerPose"].__proto__ = bodaEnv.memory.globlProtoObj["XRPose"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["XRViewerPose"].prototype, "views", {
  configurable: true,
  enumerable: true,
  get: {
    views() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["XRViewerPose"].prototype, "XRViewerPose", "views_get", arguments);
    }
  }.views,
  set: undefined
});