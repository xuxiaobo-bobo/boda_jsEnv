// HTMLStyleElement对象

bodavm.memory.globalobj['HTMLStyleElement'] = function HTMLStyleElement() {
  console.log_copy('HTMLStyleElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof HTMLStyleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['HTMLStyleElement'], "HTMLStyleElement");
bodavm.memory.globalobj['HTMLStyleElement'].prototype.__proto__ = bodavm.memory.globalobj['HTMLElement'].prototype;
bodavm.memory.globalobj['HTMLStyleElement'].__proto__ = bodavm.memory.globalobj['HTMLElement'];
bodavm.toolsFunc.defineProperty('HTMLStyleElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "disabled_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLStyleElement', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "media_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLStyleElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLStyleElement', "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "sheet_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('HTMLStyleElement', "blocking", {
  configurable: true,
  enumerable: true,
  get: function blocking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "blocking_get", arguments);
  },
  set: function blocking() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['HTMLStyleElement'].prototype, "HTMLStyleElement", "blocking_set", arguments);
  }
}, 'prototype');