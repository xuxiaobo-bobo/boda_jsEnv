// MediaMetadata对象

bodaEnv.memory.globlProtoObj["MediaMetadata"] = function MediaMetadata() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('MediaMetadata 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["MediaMetadata"], "MediaMetadata");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "title", {
  configurable: true,
  enumerable: true,
  get: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "title_get", arguments);
    }
  }.title,
  set: {
    title() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "title_set", arguments);
    }
  }.title
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "artist", {
  configurable: true,
  enumerable: true,
  get: {
    artist() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "artist_get", arguments);
    }
  }.artist,
  set: {
    artist() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "artist_set", arguments);
    }
  }.artist
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "album", {
  configurable: true,
  enumerable: true,
  get: {
    album() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "album_get", arguments);
    }
  }.album,
  set: {
    album() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "album_set", arguments);
    }
  }.album
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "artwork", {
  configurable: true,
  enumerable: true,
  get: {
    artwork() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "artwork_get", arguments);
    }
  }.artwork,
  set: {
    artwork() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["MediaMetadata"].prototype, "MediaMetadata", "artwork_set", arguments);
    }
  }.artwork
});