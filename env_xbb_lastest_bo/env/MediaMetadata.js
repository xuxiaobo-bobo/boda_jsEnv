// MediaMetadata对象

MediaMetadata = function MediaMetadata() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaMetadata 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaMetadata, "MediaMetadata");
bodavm.toolsFunc.defineProperty(MediaMetadata.prototype, "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "title_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaMetadata.prototype, "artist", {
  configurable: true,
  enumerable: true,
  get: function artist() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "artist_get", arguments);
  },
  set: function artist() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "artist_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaMetadata.prototype, "album", {
  configurable: true,
  enumerable: true,
  get: function album() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "album_get", arguments);
  },
  set: function album() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "album_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaMetadata.prototype, "artwork", {
  configurable: true,
  enumerable: true,
  get: function artwork() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "artwork_get", arguments);
  },
  set: function artwork() {
    return bodavm.toolsFunc.dispatch(this, MediaMetadata.prototype, "MediaMetadata", "artwork_set", arguments);
  }
});