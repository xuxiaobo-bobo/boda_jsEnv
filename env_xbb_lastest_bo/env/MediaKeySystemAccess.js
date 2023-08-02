// MediaKeySystemAccess对象

MediaKeySystemAccess = function MediaKeySystemAccess() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaKeySystemAccess)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaKeySystemAccess 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaKeySystemAccess, "MediaKeySystemAccess");
bodavm.toolsFunc.defineProperty(MediaKeySystemAccess.prototype, "keySystem", {
  configurable: true,
  enumerable: true,
  get: function keySystem() {
    return bodavm.toolsFunc.dispatch(this, MediaKeySystemAccess.prototype, "MediaKeySystemAccess", "keySystem_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaKeySystemAccess.prototype, "createMediaKeys", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createMediaKeys() {
    return bodavm.toolsFunc.dispatch(this, MediaKeySystemAccess.prototype, "MediaKeySystemAccess", "createMediaKeys", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaKeySystemAccess.prototype, "getConfiguration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConfiguration() {
    return bodavm.toolsFunc.dispatch(this, MediaKeySystemAccess.prototype, "MediaKeySystemAccess", "getConfiguration", arguments);
  }
});