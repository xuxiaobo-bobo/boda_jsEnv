// MediaRecorder对象

bodavm.memory.globalobj['MediaRecorder'] = function MediaRecorder() {
  console.log_copy('MediaRecorder 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaRecorder)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaRecorder': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaRecorder'], "MediaRecorder");
bodavm.memory.globalobj['MediaRecorder'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MediaRecorder'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MediaRecorder', "isTypeSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isTypeSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].undefined, "MediaRecorder", "isTypeSupported", arguments);
  }
});
bodavm.toolsFunc.defineProperty('MediaRecorder', "stream", {
  configurable: true,
  enumerable: true,
  get: function stream() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "stream_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "mimeType", {
  configurable: true,
  enumerable: true,
  get: function mimeType() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "mimeType_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "state", {
  configurable: true,
  enumerable: true,
  get: function state() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "state_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "onstart", {
  configurable: true,
  enumerable: true,
  get: function onstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onstart_get", arguments);
  },
  set: function onstart() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onstart_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "onstop", {
  configurable: true,
  enumerable: true,
  get: function onstop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onstop_get", arguments);
  },
  set: function onstop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onstop_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "ondataavailable", {
  configurable: true,
  enumerable: true,
  get: function ondataavailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "ondataavailable_get", arguments);
  },
  set: function ondataavailable() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "ondataavailable_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "onpause", {
  configurable: true,
  enumerable: true,
  get: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onpause_get", arguments);
  },
  set: function onpause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onpause_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "onresume", {
  configurable: true,
  enumerable: true,
  get: function onresume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onresume_get", arguments);
  },
  set: function onresume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onresume_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "onerror", {
  configurable: true,
  enumerable: true,
  get: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onerror_get", arguments);
  },
  set: function onerror() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "onerror_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "videoBitsPerSecond", {
  configurable: true,
  enumerable: true,
  get: function videoBitsPerSecond() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "videoBitsPerSecond_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "audioBitsPerSecond", {
  configurable: true,
  enumerable: true,
  get: function audioBitsPerSecond() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "audioBitsPerSecond_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "audioBitrateMode", {
  configurable: true,
  enumerable: true,
  get: function audioBitrateMode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "audioBitrateMode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "pause", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pause() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "pause", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "requestData", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestData() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "requestData", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "resume", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function resume() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "resume", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "start", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function start() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "start", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaRecorder', "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaRecorder'].prototype, "MediaRecorder", "stop", arguments);
  }
}, 'prototype');