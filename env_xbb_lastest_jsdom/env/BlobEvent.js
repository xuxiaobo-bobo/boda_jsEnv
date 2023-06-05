// BlobEvent对象

bodavm.memory.globalobj['BlobEvent'] = function BlobEvent() {
  console.log_copy('BlobEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof BlobEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'BlobEvent': 2 arguments required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['BlobEvent'], "BlobEvent");
bodavm.memory.globalobj['BlobEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['BlobEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('BlobEvent', "data", {
  configurable: true,
  enumerable: true,
  get: function data() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BlobEvent'].prototype, "BlobEvent", "data_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('BlobEvent', "timecode", {
  configurable: true,
  enumerable: true,
  get: function timecode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['BlobEvent'].prototype, "BlobEvent", "timecode_get", arguments);
  },
  set: undefined
}, 'prototype');