// XRLightProbe对象

XRLightProbe = function XRLightProbe() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRLightProbe)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRLightProbe 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRLightProbe, "XRLightProbe");
XRLightProbe.prototype.__proto__ = EventTarget.prototype;
XRLightProbe.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(XRLightProbe.prototype, "probeSpace", {
  configurable: true,
  enumerable: true,
  get: function probeSpace() {
    return bodavm.toolsFunc.dispatch(this, XRLightProbe.prototype, "XRLightProbe", "probeSpace_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRLightProbe.prototype, "onreflectionchange", {
  configurable: true,
  enumerable: true,
  get: function onreflectionchange() {
    return bodavm.toolsFunc.dispatch(this, XRLightProbe.prototype, "XRLightProbe", "onreflectionchange_get", arguments);
  },
  set: function onreflectionchange() {
    return bodavm.toolsFunc.dispatch(this, XRLightProbe.prototype, "XRLightProbe", "onreflectionchange_set", arguments);
  }
});