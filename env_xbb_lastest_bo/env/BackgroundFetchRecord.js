// BackgroundFetchRecord对象

BackgroundFetchRecord = function BackgroundFetchRecord() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BackgroundFetchRecord)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BackgroundFetchRecord 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BackgroundFetchRecord, "BackgroundFetchRecord");
bodavm.toolsFunc.defineProperty(BackgroundFetchRecord.prototype, "request", {
  configurable: true,
  enumerable: true,
  get: function request() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRecord.prototype, "BackgroundFetchRecord", "request_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BackgroundFetchRecord.prototype, "responseReady", {
  configurable: true,
  enumerable: true,
  get: function responseReady() {
    return bodavm.toolsFunc.dispatch(this, BackgroundFetchRecord.prototype, "BackgroundFetchRecord", "responseReady_get", arguments);
  },
  set: undefined
});