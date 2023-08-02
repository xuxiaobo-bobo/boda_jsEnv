// ReadableStreamBYOBRequest对象

ReadableStreamBYOBRequest = function ReadableStreamBYOBRequest() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ReadableStreamBYOBRequest)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ReadableStreamBYOBRequest 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ReadableStreamBYOBRequest, "ReadableStreamBYOBRequest");
bodavm.toolsFunc.defineProperty(ReadableStreamBYOBRequest.prototype, "view", {
  configurable: true,
  enumerable: true,
  get: function view() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamBYOBRequest.prototype, "ReadableStreamBYOBRequest", "view_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ReadableStreamBYOBRequest.prototype, "respond", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function respond() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamBYOBRequest.prototype, "ReadableStreamBYOBRequest", "respond", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ReadableStreamBYOBRequest.prototype, "respondWithNewView", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function respondWithNewView() {
    return bodavm.toolsFunc.dispatch(this, ReadableStreamBYOBRequest.prototype, "ReadableStreamBYOBRequest", "respondWithNewView", arguments);
  }
});