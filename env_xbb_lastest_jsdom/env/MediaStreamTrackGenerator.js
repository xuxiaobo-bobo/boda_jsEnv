// MediaStreamTrackGenerator对象

bodavm.memory.globalobj['MediaStreamTrackGenerator'] = function MediaStreamTrackGenerator() {
  console.log_copy('MediaStreamTrackGenerator 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaStreamTrackGenerator)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackGenerator': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStreamTrackGenerator'], "MediaStreamTrackGenerator");
bodavm.memory.globalobj['MediaStreamTrackGenerator'].prototype.__proto__ = bodavm.memory.globalobj['MediaStreamTrack'].prototype;
bodavm.memory.globalobj['MediaStreamTrackGenerator'].__proto__ = bodavm.memory.globalobj['MediaStreamTrack'];
bodavm.toolsFunc.defineProperty('MediaStreamTrackGenerator', "writable", {
  configurable: true,
  enumerable: true,
  get: function writable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrackGenerator'].prototype, "MediaStreamTrackGenerator", "writable_get", arguments);
  },
  set: undefined
}, 'prototype');