// FeaturePolicy对象

FeaturePolicy = function FeaturePolicy() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof FeaturePolicy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('FeaturePolicy 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(FeaturePolicy, "FeaturePolicy");
bodavm.toolsFunc.defineProperty(FeaturePolicy.prototype, "allowedFeatures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allowedFeatures() {
    return bodavm.toolsFunc.dispatch(this, FeaturePolicy.prototype, "FeaturePolicy", "allowedFeatures", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FeaturePolicy.prototype, "allowsFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allowsFeature() {
    return bodavm.toolsFunc.dispatch(this, FeaturePolicy.prototype, "FeaturePolicy", "allowsFeature", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FeaturePolicy.prototype, "features", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function features() {
    return bodavm.toolsFunc.dispatch(this, FeaturePolicy.prototype, "FeaturePolicy", "features", arguments);
  }
});
bodavm.toolsFunc.defineProperty(FeaturePolicy.prototype, "getAllowlistForFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAllowlistForFeature() {
    return bodavm.toolsFunc.dispatch(this, FeaturePolicy.prototype, "FeaturePolicy", "getAllowlistForFeature", arguments);
  }
});