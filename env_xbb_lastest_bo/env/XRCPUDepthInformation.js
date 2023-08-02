// XRCPUDepthInformation对象

XRCPUDepthInformation = function XRCPUDepthInformation() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof XRCPUDepthInformation)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('XRCPUDepthInformation 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(XRCPUDepthInformation, "XRCPUDepthInformation");
XRCPUDepthInformation.prototype.__proto__ = XRDepthInformation.prototype;
XRCPUDepthInformation.__proto__ = XRDepthInformation;
bodavm.toolsFunc.defineProperty(XRCPUDepthInformation.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, XRCPUDepthInformation.prototype, "XRCPUDepthInformation", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(XRCPUDepthInformation.prototype, "getDepthInMeters", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getDepthInMeters() {
    return bodavm.toolsFunc.dispatch(this, XRCPUDepthInformation.prototype, "XRCPUDepthInformation", "getDepthInMeters", arguments);
  }
});