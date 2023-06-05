// TextTrackCueList对象

bodavm.memory.globalobj['TextTrackCueList'] = function TextTrackCueList() {
  console.log_copy('TextTrackCueList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof TextTrackCueList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['TextTrackCueList'], "TextTrackCueList");
bodavm.toolsFunc.defineProperty('TextTrackCueList', "length", {
  configurable: true,
  enumerable: true,
  get: function length() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCueList'].prototype, "TextTrackCueList", "length_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('TextTrackCueList', "getCueById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCueById() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['TextTrackCueList'].prototype, "TextTrackCueList", "getCueById", arguments);
  }
}, 'prototype');