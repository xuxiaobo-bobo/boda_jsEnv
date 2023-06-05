// FeaturePolicy对象

bodavm.memory.globalobj['FeaturePolicy'] = function FeaturePolicy() {
  console.log_copy('FeaturePolicy 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof FeaturePolicy)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['FeaturePolicy'], "FeaturePolicy");
bodavm.toolsFunc.defineProperty('FeaturePolicy', "allowedFeatures", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allowedFeatures() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FeaturePolicy'].prototype, "FeaturePolicy", "allowedFeatures", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FeaturePolicy', "allowsFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allowsFeature() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FeaturePolicy'].prototype, "FeaturePolicy", "allowsFeature", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FeaturePolicy', "features", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function features() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FeaturePolicy'].prototype, "FeaturePolicy", "features", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('FeaturePolicy', "getAllowlistForFeature", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAllowlistForFeature() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['FeaturePolicy'].prototype, "FeaturePolicy", "getAllowlistForFeature", arguments);
  }
}, 'prototype');