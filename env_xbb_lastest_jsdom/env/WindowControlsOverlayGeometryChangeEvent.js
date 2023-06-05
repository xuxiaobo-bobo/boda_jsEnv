// WindowControlsOverlayGeometryChangeEvent对象

bodavm.memory.globalobj['WindowControlsOverlayGeometryChangeEvent'] = function WindowControlsOverlayGeometryChangeEvent() {
  console.log_copy('WindowControlsOverlayGeometryChangeEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof WindowControlsOverlayGeometryChangeEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'WindowControlsOverlayGeometryChangeEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['WindowControlsOverlayGeometryChangeEvent'], "WindowControlsOverlayGeometryChangeEvent");
bodavm.memory.globalobj['WindowControlsOverlayGeometryChangeEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['WindowControlsOverlayGeometryChangeEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('WindowControlsOverlayGeometryChangeEvent', "titlebarAreaRect", {
  configurable: true,
  enumerable: true,
  get: function titlebarAreaRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WindowControlsOverlayGeometryChangeEvent'].prototype, "WindowControlsOverlayGeometryChangeEvent", "titlebarAreaRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('WindowControlsOverlayGeometryChangeEvent', "visible", {
  configurable: true,
  enumerable: true,
  get: function visible() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['WindowControlsOverlayGeometryChangeEvent'].prototype, "WindowControlsOverlayGeometryChangeEvent", "visible_get", arguments);
  },
  set: undefined
}, 'prototype');