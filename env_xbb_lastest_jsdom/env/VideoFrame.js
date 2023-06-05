// VideoFrame对象

bodavm.memory.globalobj['VideoFrame'] = function VideoFrame() {
  console.log_copy('VideoFrame 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof VideoFrame)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'VideoFrame': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['VideoFrame'], "VideoFrame");
bodavm.toolsFunc.defineProperty('VideoFrame', "format", {
  configurable: true,
  enumerable: true,
  get: function format() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "format_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "timestamp", {
  configurable: true,
  enumerable: true,
  get: function timestamp() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "timestamp_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "duration", {
  configurable: true,
  enumerable: true,
  get: function duration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "duration_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "codedWidth", {
  configurable: true,
  enumerable: true,
  get: function codedWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "codedWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "codedHeight", {
  configurable: true,
  enumerable: true,
  get: function codedHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "codedHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "codedRect", {
  configurable: true,
  enumerable: true,
  get: function codedRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "codedRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "visibleRect", {
  configurable: true,
  enumerable: true,
  get: function visibleRect() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "visibleRect_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "displayWidth", {
  configurable: true,
  enumerable: true,
  get: function displayWidth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "displayWidth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "displayHeight", {
  configurable: true,
  enumerable: true,
  get: function displayHeight() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "displayHeight_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "colorSpace", {
  configurable: true,
  enumerable: true,
  get: function colorSpace() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "colorSpace_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "allocationSize", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function allocationSize() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "allocationSize", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "clone", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function clone() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "clone", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "close", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function close() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "close", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('VideoFrame', "copyTo", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function copyTo() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['VideoFrame'].prototype, "VideoFrame", "copyTo", arguments);
  }
}, 'prototype');