// MediaStreamTrackProcessor对象

bodavm.memory.globalobj['MediaStreamTrackProcessor'] = function MediaStreamTrackProcessor() {
  console.log_copy('MediaStreamTrackProcessor 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaStreamTrackProcessor)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaStreamTrackProcessor': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStreamTrackProcessor'], "MediaStreamTrackProcessor");
bodavm.toolsFunc.defineProperty('MediaStreamTrackProcessor', "readable", {
  configurable: true,
  enumerable: true,
  get: function readable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrackProcessor'].prototype, "MediaStreamTrackProcessor", "readable_get", arguments);
  },
  set: undefined
}, 'prototype');