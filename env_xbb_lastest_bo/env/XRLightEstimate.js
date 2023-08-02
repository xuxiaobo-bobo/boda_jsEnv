// XRLightEstimate对象

XRLightEstimate = function XRLightEstimate() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRLightEstimate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRLightEstimate 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRLightEstimate, "XRLightEstimate");
bodavm.toolsFunc.defineProperty(XRLightEstimate.prototype, "sphericalHarmonicsCoefficients", {
  configurable: true,
  enumerable: true,
  get: function sphericalHarmonicsCoefficients() {
    return bodavm.toolsFunc.dispatch(this, XRLightEstimate.prototype, "XRLightEstimate", "sphericalHarmonicsCoefficients_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRLightEstimate.prototype, "primaryLightDirection", {
  configurable: true,
  enumerable: true,
  get: function primaryLightDirection() {
    return bodavm.toolsFunc.dispatch(this, XRLightEstimate.prototype, "XRLightEstimate", "primaryLightDirection_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRLightEstimate.prototype, "primaryLightIntensity", {
  configurable: true,
  enumerable: true,
  get: function primaryLightIntensity() {
    return bodavm.toolsFunc.dispatch(this, XRLightEstimate.prototype, "XRLightEstimate", "primaryLightIntensity_get", arguments);
  },
  set: undefined
});