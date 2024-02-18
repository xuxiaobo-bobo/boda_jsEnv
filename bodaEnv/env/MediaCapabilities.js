// MediaCapabilities对象

bodaEnv.memory.globlProtoObj["MediaCapabilities"] = function MediaCapabilities() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaCapabilities 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaCapabilities"], "MediaCapabilities");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaCapabilities"].prototype, "decodingInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    decodingInfo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaCapabilities"].prototype, "MediaCapabilities", "decodingInfo", arguments);
    }
  }.decodingInfo
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaCapabilities"].prototype, "encodingInfo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    encodingInfo() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaCapabilities"].prototype, "MediaCapabilities", "encodingInfo", arguments);
    }
  }.encodingInfo
});