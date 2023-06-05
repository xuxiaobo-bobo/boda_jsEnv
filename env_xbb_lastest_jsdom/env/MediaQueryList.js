// MediaQueryList对象

bodavm.memory.globalobj['MediaQueryList'] = function MediaQueryList() {
  console.log_copy('MediaQueryList 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof MediaQueryList)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['MediaQueryList'], "MediaQueryList");
bodavm.memory.globalobj['MediaQueryList'].prototype.__proto__ = bodavm.memory.globalobj['EventTarget'].prototype;
bodavm.memory.globalobj['MediaQueryList'].__proto__ = bodavm.memory.globalobj['EventTarget'];
bodavm.toolsFunc.defineProperty('MediaQueryList', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryList'].prototype, "MediaQueryList", "media_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaQueryList', "matches", {
  configurable: true,
  enumerable: true,
  get: function matches() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryList'].prototype, "MediaQueryList", "matches_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaQueryList', "onchange", {
  configurable: true,
  enumerable: true,
  get: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryList'].prototype, "MediaQueryList", "onchange_get", arguments);
  },
  set: function onchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryList'].prototype, "MediaQueryList", "onchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaQueryList', "addListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function addListener() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryList'].prototype, "MediaQueryList", "addListener", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('MediaQueryList', "removeListener", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function removeListener() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['MediaQueryList'].prototype, "MediaQueryList", "removeListener", arguments);
  }
}, 'prototype');