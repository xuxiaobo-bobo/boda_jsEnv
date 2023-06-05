// MediaQueryListEvent对象

bodavm.memory.globalobj['MediaQueryListEvent'] = function MediaQueryListEvent() {
  console.log_copy('MediaQueryListEvent 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaQueryListEvent)) {
    return bodavm.toolsFunc.throwError("TypeError", "Failed to construct 'MediaQueryListEvent': 1 argument required, but only 0 present.");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaQueryListEvent'], "MediaQueryListEvent");
bodavm.memory.globalobj['MediaQueryListEvent'].prototype.__proto__ = bodavm.memory.globalobj['Event'].prototype;
bodavm.memory.globalobj['MediaQueryListEvent'].__proto__ = bodavm.memory.globalobj['Event'];
bodavm.toolsFunc.defineProperty('MediaQueryListEvent', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryListEvent'].prototype, "MediaQueryListEvent", "media_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaQueryListEvent', "matches", {
  configurable: true,
  enumerable: true,
  get: function matches() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryListEvent'].prototype, "MediaQueryListEvent", "matches_get", arguments);
  },
  set: undefined
}, 'prototype');