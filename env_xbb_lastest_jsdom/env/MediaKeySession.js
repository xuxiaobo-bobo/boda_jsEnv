// MediaKeySession对象

bodavm.memory.globalobj['MediaKeySession'] = function MediaKeySession() {
  console.log_copy('MediaKeySession 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaKeySession)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaKeySession'], "MediaKeySession");
bodavm.memory.globalobj['MediaKeySession'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MediaKeySession'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MediaKeySession', "sessionId", {
  configurable: true,
  enumerable: true,
  get: function sessionId() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "sessionId_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "expiration", {
  configurable: true,
  enumerable: true,
  get: function expiration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "expiration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "closed", {
  configurable: true,
  enumerable: true,
  get: function closed() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "closed_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "keyStatuses", {
  configurable: true,
  enumerable: true,
  get: function keyStatuses() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "keyStatuses_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "onkeystatuseschange", {
  configurable: true,
  enumerable: true,
  get: function onkeystatuseschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "onkeystatuseschange_get", arguments);
  },
  set: function onkeystatuseschange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "onkeystatuseschange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "onmessage", {
  configurable: true,
  enumerable: true,
  get: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "onmessage_get", arguments);
  },
  set: function onmessage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "onmessage_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "generateRequest", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function generateRequest() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "generateRequest", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "load", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function load() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "load", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "remove", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function remove() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "remove", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaKeySession', "update", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function update() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaKeySession'].prototype, "MediaKeySession", "update", arguments);
  }
}, 'prototype');