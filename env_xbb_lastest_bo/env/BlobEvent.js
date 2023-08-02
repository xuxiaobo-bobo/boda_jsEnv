// BlobEvent对象

BlobEvent = function BlobEvent() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof BlobEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BlobEvent': 2 arguments required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('BlobEvent 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(BlobEvent, "BlobEvent");
BlobEvent.prototype.__proto__ = Event.prototype;
BlobEvent.__proto__ = Event;
bodavm.toolsFunc.defineProperty(BlobEvent.prototype, "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, BlobEvent.prototype, "BlobEvent", "data_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(BlobEvent.prototype, "timecode", {
  configurable: true,
  enumerable: true,
  get: function timecode() {
    return bodavm.toolsFunc.dispatch(this, BlobEvent.prototype, "BlobEvent", "timecode_get", arguments);
  },
  set: undefined
});