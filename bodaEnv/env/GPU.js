// GPU对象

bodaEnv.memory.globlProtoObj["GPU"] = function GPU() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('GPU 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["GPU"], "GPU");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPU"].prototype, "wgslLanguageFeatures", {
  configurable: true,
  enumerable: true,
  get: {
    wgslLanguageFeatures() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPU"].prototype, "GPU", "wgslLanguageFeatures_get", arguments);
    }
  }.wgslLanguageFeatures,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPU"].prototype, "getPreferredCanvasFormat", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPreferredCanvasFormat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPU"].prototype, "GPU", "getPreferredCanvasFormat", arguments);
    }
  }.getPreferredCanvasFormat
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["GPU"].prototype, "requestAdapter", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    requestAdapter() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["GPU"].prototype, "GPU", "requestAdapter", arguments);
    }
  }.requestAdapter
});