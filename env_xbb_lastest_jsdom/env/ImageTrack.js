// ImageTrack对象

bodavm.memory.globalobj['ImageTrack'] = function ImageTrack() {
  console.log_copy('ImageTrack 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ImageTrack)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ImageTrack'], "ImageTrack");
bodavm.toolsFunc.defineProperty('ImageTrack', "frameCount", {
  configurable: true,
  enumerable: true,
  get: function frameCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrack'].prototype, "ImageTrack", "frameCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageTrack', "animated", {
  configurable: true,
  enumerable: true,
  get: function animated() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrack'].prototype, "ImageTrack", "animated_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageTrack', "repetitionCount", {
  configurable: true,
  enumerable: true,
  get: function repetitionCount() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrack'].prototype, "ImageTrack", "repetitionCount_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageTrack', "selected", {
  configurable: true,
  enumerable: true,
  get: function selected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrack'].prototype, "ImageTrack", "selected_get", arguments);
  },
  set: function selected() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageTrack'].prototype, "ImageTrack", "selected_set", arguments);
  }
}, 'prototype');