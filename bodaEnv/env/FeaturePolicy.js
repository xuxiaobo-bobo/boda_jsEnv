// FeaturePolicy对象

bodaEnv.memory.globlProtoObj["FeaturePolicy"] = function FeaturePolicy() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('FeaturePolicy 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["FeaturePolicy"], "FeaturePolicy");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "allowedFeatures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    allowedFeatures() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "FeaturePolicy", "allowedFeatures", arguments);
    }
  }.allowedFeatures
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "allowsFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    allowsFeature() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "FeaturePolicy", "allowsFeature", arguments);
    }
  }.allowsFeature
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "features", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    features() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "FeaturePolicy", "features", arguments);
    }
  }.features
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "getAllowlistForFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAllowlistForFeature() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["FeaturePolicy"].prototype, "FeaturePolicy", "getAllowlistForFeature", arguments);
    }
  }.getAllowlistForFeature
});