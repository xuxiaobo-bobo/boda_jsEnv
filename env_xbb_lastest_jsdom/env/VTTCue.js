// VTTCue对象

bodavm.memory.globalobj['VTTCue'] = function VTTCue() {
  console.log_copy('VTTCue 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VTTCue)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VTTCue': 3 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VTTCue'], "VTTCue");
bodavm.memory.globalobj['VTTCue'].prototype.__proto__ = bodavm.memory.globalobj['TextTrackCue'].prototype;
bodavm.memory.globalobj['VTTCue'].__proto__ = bodavm.memory.globalobj['TextTrackCue'];
bodavm.toolsFunc.defineProperty('VTTCue', "vertical", {
  configurable: true,
  enumerable: true,
  get: function vertical() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "vertical_get", arguments);
  },
  set: function vertical() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "vertical_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VTTCue', "snapToLines", {
  configurable: true,
  enumerable: true,
  get: function snapToLines() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "snapToLines_get", arguments);
  },
  set: function snapToLines() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "snapToLines_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VTTCue', "line", {
  configurable: true,
  enumerable: true,
  get: function line() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "line_get", arguments);
  },
  set: function line() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "line_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VTTCue', "position", {
  configurable: true,
  enumerable: true,
  get: function position() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "position_get", arguments);
  },
  set: function position() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "position_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VTTCue', "size", {
  configurable: true,
  enumerable: true,
  get: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "size_get", arguments);
  },
  set: function size() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "size_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VTTCue', "align", {
  configurable: true,
  enumerable: true,
  get: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "align_get", arguments);
  },
  set: function align() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "align_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VTTCue', "text", {
  configurable: true,
  enumerable: true,
  get: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "text_get", arguments);
  },
  set: function text() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "text_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VTTCue', "getCueAsHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCueAsHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VTTCue'].prototype, "VTTCue", "getCueAsHTML", arguments);
  }
}, 'prototype');