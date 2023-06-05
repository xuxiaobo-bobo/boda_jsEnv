// WindowControlsOverlay对象

bodavm.memory.globalobj['WindowControlsOverlay'] = function WindowControlsOverlay() {
  console.log_copy('WindowControlsOverlay 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WindowControlsOverlay)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WindowControlsOverlay'], "WindowControlsOverlay");
bodavm.memory.globalobj['WindowControlsOverlay'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['WindowControlsOverlay'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('WindowControlsOverlay', "visible", {
  configurable: true,
  enumerable: true,
  get: function visible() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WindowControlsOverlay'].prototype, "WindowControlsOverlay", "visible_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WindowControlsOverlay', "ongeometrychange", {
  configurable: true,
  enumerable: true,
  get: function ongeometrychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WindowControlsOverlay'].prototype, "WindowControlsOverlay", "ongeometrychange_get", arguments);
  },
  set: function ongeometrychange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WindowControlsOverlay'].prototype, "WindowControlsOverlay", "ongeometrychange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('WindowControlsOverlay', "getTitlebarAreaRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getTitlebarAreaRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WindowControlsOverlay'].prototype, "WindowControlsOverlay", "getTitlebarAreaRect", arguments);
  }
}, 'prototype');