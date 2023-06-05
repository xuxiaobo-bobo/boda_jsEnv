// MediaStream对象

bodavm.memory.globalobj['MediaStream'] = function MediaStream() {
  console.log_copy('MediaStream 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.MediaStream();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStream'], "MediaStream");
bodavm.memory.globalobj['MediaStream'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MediaStream'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MediaStream', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "active", {
  configurable: true,
  enumerable: true,
  get: function active() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "active_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "onaddtrack", {
  configurable: true,
  enumerable: true,
  get: function onaddtrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "onaddtrack_get", arguments);
  },
  set: function onaddtrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "onaddtrack_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "onremovetrack", {
  configurable: true,
  enumerable: true,
  get: function onremovetrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "onremovetrack_get", arguments);
  },
  set: function onremovetrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "onremovetrack_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "onactive", {
  configurable: true,
  enumerable: true,
  get: function onactive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "onactive_get", arguments);
  },
  set: function onactive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "onactive_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "oninactive", {
  configurable: true,
  enumerable: true,
  get: function oninactive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "oninactive_get", arguments);
  },
  set: function oninactive() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "oninactive_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "addTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "addTrack", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "clone", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "getAudioTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAudioTracks() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "getAudioTracks", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "getTrackById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTrackById() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "getTrackById", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "getTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTracks() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "getTracks", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "getVideoTracks", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getVideoTracks() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "getVideoTracks", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStream', "removeTrack", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeTrack() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStream'].prototype, "MediaStream", "removeTrack", arguments);
  }
}, 'prototype');