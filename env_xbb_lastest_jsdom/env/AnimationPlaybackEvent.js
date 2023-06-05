// AnimationPlaybackEvent对象

bodavm.memory.globalobj['AnimationPlaybackEvent'] = function AnimationPlaybackEvent() {
  console.log_copy('AnimationPlaybackEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof AnimationPlaybackEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'AnimationPlaybackEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['AnimationPlaybackEvent'], "AnimationPlaybackEvent");
bodavm.memory.globalobj['AnimationPlaybackEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['AnimationPlaybackEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('AnimationPlaybackEvent', "currentTime", {
  configurable: true,
  enumerable: true,
  get: function currentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationPlaybackEvent'].prototype, "AnimationPlaybackEvent", "currentTime_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('AnimationPlaybackEvent', "timelineTime", {
  configurable: true,
  enumerable: true,
  get: function timelineTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['AnimationPlaybackEvent'].prototype, "AnimationPlaybackEvent", "timelineTime_get", arguments);
  },
  set: undefined
}, 'prototype');