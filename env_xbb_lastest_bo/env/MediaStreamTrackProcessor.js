// MediaStreamTrackProcessor对象

MediaStreamTrackProcessor = function MediaStreamTrackProcessor() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof MediaStreamTrackProcessor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackProcessor': 1 argument required, but only 0 present.");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStreamTrackProcessor 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStreamTrackProcessor, "MediaStreamTrackProcessor");
bodavm.toolsFunc.defineProperty(MediaStreamTrackProcessor.prototype, "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, MediaStreamTrackProcessor.prototype, "MediaStreamTrackProcessor", "readable_get", arguments);
  },
  set: undefined
});