// ImageTrackList对象

ImageTrackList = function ImageTrackList() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ImageTrackList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ImageTrackList 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ImageTrackList, "ImageTrackList");
bodavm.toolsFunc.defineProperty(ImageTrackList.prototype, "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, ImageTrackList.prototype, "ImageTrackList", "length_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageTrackList.prototype, "selectedIndex", {
  configurable: true,
  enumerable: true,
  get: function selectedIndex() {
    return bodavm.toolsFunc.dispatch(this, ImageTrackList.prototype, "ImageTrackList", "selectedIndex_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageTrackList.prototype, "selectedTrack", {
  configurable: true,
  enumerable: true,
  get: function selectedTrack() {
    return bodavm.toolsFunc.dispatch(this, ImageTrackList.prototype, "ImageTrackList", "selectedTrack_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ImageTrackList.prototype, "ready", {
  configurable: true,
  enumerable: true,
  get: function ready() {
    return bodavm.toolsFunc.dispatch(this, ImageTrackList.prototype, "ImageTrackList", "ready_get", arguments);
  },
  set: undefined
});