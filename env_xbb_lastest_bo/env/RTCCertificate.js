// RTCCertificate对象

RTCCertificate = function RTCCertificate() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof RTCCertificate)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('RTCCertificate 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(RTCCertificate, "RTCCertificate");
bodavm.toolsFunc.defineProperty(RTCCertificate.prototype, "expires", {
  configurable: true,
  enumerable: true,
  get: function expires() {
    return bodavm.toolsFunc.dispatch(this, RTCCertificate.prototype, "RTCCertificate", "expires_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(RTCCertificate.prototype, "getFingerprints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getFingerprints() {
    return bodavm.toolsFunc.dispatch(this, RTCCertificate.prototype, "RTCCertificate", "getFingerprints", arguments);
  }
});