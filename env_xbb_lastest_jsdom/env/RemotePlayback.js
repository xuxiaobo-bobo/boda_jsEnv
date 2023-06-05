// RemotePlayback对象

bodavm.memory.globalobj['RemotePlayback'] = function RemotePlayback() {
  console.log_copy('RemotePlayback 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof RemotePlayback)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['RemotePlayback'], "RemotePlayback");
bodavm.memory.globalobj['RemotePlayback'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['RemotePlayback'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('RemotePlayback', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('RemotePlayback', "onconnecting", {
  configurable: true,
  enumerable: true,
  get: function onconnecting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "onconnecting_get", arguments);
  },
  set: function onconnecting() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "onconnecting_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RemotePlayback', "onconnect", {
  configurable: true,
  enumerable: true,
  get: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "onconnect_get", arguments);
  },
  set: function onconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "onconnect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RemotePlayback', "ondisconnect", {
  configurable: true,
  enumerable: true,
  get: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "ondisconnect_get", arguments);
  },
  set: function ondisconnect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "ondisconnect_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RemotePlayback', "cancelWatchAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function cancelWatchAvailability() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "cancelWatchAvailability", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RemotePlayback', "prompt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function prompt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "prompt", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('RemotePlayback', "watchAvailability", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function watchAvailability() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['RemotePlayback'].prototype, "RemotePlayback", "watchAvailability", arguments);
  }
}, 'prototype');