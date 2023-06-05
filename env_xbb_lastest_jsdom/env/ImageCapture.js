// ImageCapture对象

bodavm.memory.globalobj['ImageCapture'] = function ImageCapture() {
  console.log_copy('ImageCapture 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ImageCapture)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageCapture': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ImageCapture'], "ImageCapture");
bodavm.toolsFunc.defineProperty('ImageCapture', "track", {
  configurable: true,
  enumerable: true,
  get: function track() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageCapture'].prototype, "ImageCapture", "track_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageCapture', "getPhotoCapabilities", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPhotoCapabilities() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageCapture'].prototype, "ImageCapture", "getPhotoCapabilities", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageCapture', "getPhotoSettings", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getPhotoSettings() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageCapture'].prototype, "ImageCapture", "getPhotoSettings", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageCapture', "grabFrame", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function grabFrame() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageCapture'].prototype, "ImageCapture", "grabFrame", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageCapture', "takePhoto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function takePhoto() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageCapture'].prototype, "ImageCapture", "takePhoto", arguments);
  }
}, 'prototype');