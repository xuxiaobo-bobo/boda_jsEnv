// MediaError对象

MediaError = function MediaError() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaError)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaError 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaError, "MediaError");
bodavm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_ABORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_NETWORK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_DECODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(MediaError, "MEDIA_ERR_SRC_NOT_SUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});
bodavm.toolsFunc.defineProperty(MediaError.prototype, "code", {
  configurable: true,
  enumerable: true,
  get: function code() {
    return bodavm.toolsFunc.dispatch(this, MediaError.prototype, "MediaError", "code_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaError.prototype, "message", {
  configurable: true,
  enumerable: true,
  get: function message() {
    return bodavm.toolsFunc.dispatch(this, MediaError.prototype, "MediaError", "message_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_ABORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_NETWORK", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_DECODE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 3
});
bodavm.toolsFunc.defineProperty(MediaError.prototype, "MEDIA_ERR_SRC_NOT_SUPPORTED", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 4
});