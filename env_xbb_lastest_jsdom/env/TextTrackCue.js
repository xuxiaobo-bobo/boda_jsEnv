// TextTrackCue对象

bodavm.memory.globalobj['TextTrackCue'] = function TextTrackCue() {
  console.log_copy('TextTrackCue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TextTrackCue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextTrackCue'], "TextTrackCue");
bodavm.memory.globalobj['TextTrackCue'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['TextTrackCue'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('TextTrackCue', "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "track_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrackCue', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "id_get", arguments);
  },
  set: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "id_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrackCue', "startTime", {
  configurable: true,
  enumerable: true,
  get: function startTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "startTime_get", arguments);
  },
  set: function startTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "startTime_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrackCue', "endTime", {
  configurable: true,
  enumerable: true,
  get: function endTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "endTime_get", arguments);
  },
  set: function endTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "endTime_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrackCue', "pauseOnExit", {
  configurable: true,
  enumerable: true,
  get: function pauseOnExit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "pauseOnExit_get", arguments);
  },
  set: function pauseOnExit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "pauseOnExit_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrackCue', "onenter", {
  configurable: true,
  enumerable: true,
  get: function onenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "onenter_get", arguments);
  },
  set: function onenter() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "onenter_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrackCue', "onexit", {
  configurable: true,
  enumerable: true,
  get: function onexit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "onexit_get", arguments);
  },
  set: function onexit() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCue'].prototype, "TextTrackCue", "onexit_set", arguments);
  }
}, 'prototype');