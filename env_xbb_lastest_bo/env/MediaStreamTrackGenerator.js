// MediaStreamTrackGenerator对象

MediaStreamTrackGenerator = function MediaStreamTrackGenerator() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaStreamTrackGenerator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackGenerator': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStreamTrackGenerator 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStreamTrackGenerator, "MediaStreamTrackGenerator");
MediaStreamTrackGenerator.prototype.__proto__ = MediaStreamTrack.prototype;
MediaStreamTrackGenerator.__proto__ = MediaStreamTrack;
bodavm.toolsFunc.defineProperty(MediaStreamTrackGenerator.prototype, "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrackGenerator.prototype, "MediaStreamTrackGenerator", "writable_get", arguments);
  },
  set: undefined
});