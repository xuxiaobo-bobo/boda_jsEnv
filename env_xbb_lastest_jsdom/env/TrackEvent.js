// TrackEvent对象

bodavm.memory.globalobj['TrackEvent'] = function TrackEvent() {
  console.log_copy('TrackEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TrackEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'TrackEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TrackEvent'], "TrackEvent");
bodavm.memory.globalobj['TrackEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['TrackEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('TrackEvent', "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TrackEvent'].prototype, "TrackEvent", "track_get", arguments);
  },
  set: undefined
}, 'prototype');