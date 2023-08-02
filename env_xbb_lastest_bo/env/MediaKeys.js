// MediaKeys对象

MediaKeys = function MediaKeys() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaKeys)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaKeys 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaKeys, "MediaKeys");
bodavm.toolsFunc.defineProperty(MediaKeys.prototype, "createSession", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSession() {
    return bodavm.toolsFunc.dispatch(this, MediaKeys.prototype, "MediaKeys", "createSession", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeys.prototype, "setServerCertificate", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setServerCertificate() {
    return bodavm.toolsFunc.dispatch(this, MediaKeys.prototype, "MediaKeys", "setServerCertificate", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeys.prototype, "getStatusForPolicy", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStatusForPolicy() {
    return bodavm.toolsFunc.dispatch(this, MediaKeys.prototype, "MediaKeys", "getStatusForPolicy", arguments);
  }
});