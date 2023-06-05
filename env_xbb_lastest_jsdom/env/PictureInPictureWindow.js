// PictureInPictureWindow对象

bodavm.memory.globalobj['PictureInPictureWindow'] = function PictureInPictureWindow() {
  console.log_copy('PictureInPictureWindow 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof PictureInPictureWindow)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['PictureInPictureWindow'], "PictureInPictureWindow");
bodavm.memory.globalobj['PictureInPictureWindow'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['PictureInPictureWindow'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('PictureInPictureWindow', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PictureInPictureWindow'].prototype, "PictureInPictureWindow", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PictureInPictureWindow', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PictureInPictureWindow'].prototype, "PictureInPictureWindow", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('PictureInPictureWindow', "onresize", {
  configurable: true,
  enumerable: true,
  get: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PictureInPictureWindow'].prototype, "PictureInPictureWindow", "onresize_get", arguments);
  },
  set: function onresize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['PictureInPictureWindow'].prototype, "PictureInPictureWindow", "onresize_set", arguments);
  }
}, 'prototype');