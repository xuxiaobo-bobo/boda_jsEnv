// MediaMetadata对象

bodavm.memory.globalobj['MediaMetadata'] = function MediaMetadata() {
  console.log_copy('MediaMetadata 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.MediaMetadata();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaMetadata'], "MediaMetadata");
bodavm.toolsFunc.defineProperty('MediaMetadata', "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "title_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaMetadata', "artist", {
  configurable: true,
  enumerable: true,
  get: function artist() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "artist_get", arguments);
  },
  set: function artist() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "artist_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaMetadata', "album", {
  configurable: true,
  enumerable: true,
  get: function album() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "album_get", arguments);
  },
  set: function album() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "album_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaMetadata', "artwork", {
  configurable: true,
  enumerable: true,
  get: function artwork() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "artwork_get", arguments);
  },
  set: function artwork() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaMetadata'].prototype, "MediaMetadata", "artwork_set", arguments);
  }
}, 'prototype');