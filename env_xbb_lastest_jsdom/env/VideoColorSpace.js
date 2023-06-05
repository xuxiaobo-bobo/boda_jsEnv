// VideoColorSpace对象

bodavm.memory.globalobj['VideoColorSpace'] = function VideoColorSpace() {
  console.log_copy('VideoColorSpace 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  this._boarg = new bodaobj.window.VideoColorSpace();
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VideoColorSpace'], "VideoColorSpace");
bodavm.toolsFunc.defineProperty('VideoColorSpace', "primaries", {
  configurable: true,
  enumerable: true,
  get: function primaries() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoColorSpace'].prototype, "VideoColorSpace", "primaries_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoColorSpace', "transfer", {
  configurable: true,
  enumerable: true,
  get: function transfer() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoColorSpace'].prototype, "VideoColorSpace", "transfer_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoColorSpace', "matrix", {
  configurable: true,
  enumerable: true,
  get: function matrix() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoColorSpace'].prototype, "VideoColorSpace", "matrix_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoColorSpace', "fullRange", {
  configurable: true,
  enumerable: true,
  get: function fullRange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoColorSpace'].prototype, "VideoColorSpace", "fullRange_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoColorSpace', "toJSON", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toJSON() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoColorSpace'].prototype, "VideoColorSpace", "toJSON", arguments);
  }
}, 'prototype');