// ImageData对象

bodavm.memory.globalobj['ImageData'] = function ImageData() {
  console.log_copy('ImageData 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ImageData)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'ImageData': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ImageData'], "ImageData");
bodavm.toolsFunc.defineProperty('ImageData', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageData'].prototype, "ImageData", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageData', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageData'].prototype, "ImageData", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageData', "colorSpace", {
  configurable: true,
  enumerable: true,
  get: function colorSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageData'].prototype, "ImageData", "colorSpace_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ImageData', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ImageData'].prototype, "ImageData", "data_get", arguments);
  },
  set: undefined
}, 'prototype');