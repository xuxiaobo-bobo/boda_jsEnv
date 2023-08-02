// MediaStream对象

MediaStream = function MediaStream() {
  let arg = arguments[0];
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('MediaStream 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(MediaStream, "MediaStream");
MediaStream.prototype.__proto__ = EventTarget.prototype;
MediaStream.__proto__ = EventTarget;
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "id_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "active", {
  configurable: true,
  enumerable: true,
  get: function active() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "active_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "onaddtrack", {
  configurable: true,
  enumerable: true,
  get: function onaddtrack() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onaddtrack_get", arguments);
  },
  set: function onaddtrack() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onaddtrack_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "onremovetrack", {
  configurable: true,
  enumerable: true,
  get: function onremovetrack() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onremovetrack_get", arguments);
  },
  set: function onremovetrack() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onremovetrack_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "onactive", {
  configurable: true,
  enumerable: true,
  get: function onactive() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onactive_get", arguments);
  },
  set: function onactive() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "onactive_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "oninactive", {
  configurable: true,
  enumerable: true,
  get: function oninactive() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "oninactive_get", arguments);
  },
  set: function oninactive() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "oninactive_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "addTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTrack() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "addTrack", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "clone", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getAudioTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAudioTracks() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getAudioTracks", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getTrackById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTrackById() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getTrackById", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTracks() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getTracks", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "getVideoTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVideoTracks() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "getVideoTracks", arguments);
  }
});
bodavm.toolsFunc.defineProperty(MediaStream.prototype, "removeTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeTrack() {
    return bodavm.toolsFunc.dispatch(this, MediaStream.prototype, "MediaStream", "removeTrack", arguments);
  }
});