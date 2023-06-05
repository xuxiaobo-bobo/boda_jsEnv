// XRSystem对象

bodavm.memory.globalobj['XRSystem'] = function XRSystem() {
  console.log_copy('XRSystem 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof XRSystem)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['XRSystem'], "XRSystem");
bodavm.memory.globalobj['XRSystem'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['XRSystem'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('XRSystem', "ondevicechange", {
  configurable: true,
  enumerable: true,
  get: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSystem'].prototype, "XRSystem", "ondevicechange_get", arguments);
  },
  set: function ondevicechange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSystem'].prototype, "XRSystem", "ondevicechange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSystem', "isSessionSupported", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function isSessionSupported() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSystem'].prototype, "XRSystem", "isSessionSupported", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSystem', "requestSession", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function requestSession() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSystem'].prototype, "XRSystem", "requestSession", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('XRSystem', "supportsSession", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function supportsSession() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['XRSystem'].prototype, "XRSystem", "supportsSession", arguments);
  }
}, 'prototype');