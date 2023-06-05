// MediaList对象

bodavm.memory.globalobj['MediaList'] = function MediaList() {
  console.log_copy('MediaList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaList'], "MediaList");
bodavm.toolsFunc.defineProperty('MediaList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaList'].prototype, "MediaList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaList', "mediaText", {
  configurable: true,
  enumerable: true,
  get: function mediaText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaList'].prototype, "MediaList", "mediaText_get", arguments);
  },
  set: function mediaText() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaList'].prototype, "MediaList", "mediaText_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaList', "appendMedium", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function appendMedium() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaList'].prototype, "MediaList", "appendMedium", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaList', "deleteMedium", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deleteMedium() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaList'].prototype, "MediaList", "deleteMedium", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaList', "item", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function item() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaList'].prototype, "MediaList", "item", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaList', "toString", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function toString() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaList'].prototype, "MediaList", "toString", arguments);
  }
}, 'prototype');