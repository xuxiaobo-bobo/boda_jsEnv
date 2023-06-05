// MediaStreamTrack对象

bodavm.memory.globalobj['MediaStreamTrack'] = function MediaStreamTrack() {
  console.log_copy('MediaStreamTrack 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaStreamTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaStreamTrack'], "MediaStreamTrack");
bodavm.memory.globalobj['MediaStreamTrack'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MediaStreamTrack'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "kind", {
  configurable: true,
  enumerable: true,
  get: function kind() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "kind_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "id", {
  configurable: true,
  enumerable: true,
  get: function id() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "id_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "label", {
  configurable: true,
  enumerable: true,
  get: function label() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "label_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "enabled", {
  configurable: true,
  enumerable: true,
  get: function enabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "enabled_get", arguments);
  },
  set: function enabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "enabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "muted", {
  configurable: true,
  enumerable: true,
  get: function muted() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "muted_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "onmute", {
  configurable: true,
  enumerable: true,
  get: function onmute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "onmute_get", arguments);
  },
  set: function onmute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "onmute_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "onunmute", {
  configurable: true,
  enumerable: true,
  get: function onunmute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "onunmute_get", arguments);
  },
  set: function onunmute() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "onunmute_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "readyState", {
  configurable: true,
  enumerable: true,
  get: function readyState() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "readyState_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "onended", {
  configurable: true,
  enumerable: true,
  get: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "onended_get", arguments);
  },
  set: function onended() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "onended_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "contentHint", {
  configurable: true,
  enumerable: true,
  get: function contentHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "contentHint_get", arguments);
  },
  set: function contentHint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "contentHint_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "applyConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function applyConstraints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "applyConstraints", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "clone", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "getCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCapabilities() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "getCapabilities", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "getConstraints", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getConstraints() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "getConstraints", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "getSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSettings() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "getSettings", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "stop", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function stop() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "stop", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "oncapturehandlechange", {
  configurable: true,
  enumerable: true,
  get: function oncapturehandlechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "oncapturehandlechange_get", arguments);
  },
  set: function oncapturehandlechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "oncapturehandlechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaStreamTrack', "getCaptureHandle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCaptureHandle() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaStreamTrack'].prototype, "MediaStreamTrack", "getCaptureHandle", arguments);
  }
}, 'prototype');