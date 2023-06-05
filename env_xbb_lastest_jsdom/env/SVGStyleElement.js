// SVGStyleElement对象

bodavm.memory.globalobj['SVGStyleElement'] = function SVGStyleElement() {
  console.log_copy('SVGStyleElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGStyleElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGStyleElement'], "SVGStyleElement");
bodavm.memory.globalobj['SVGStyleElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGStyleElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGStyleElement', "type", {
  configurable: true,
  enumerable: true,
  get: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "type_get", arguments);
  },
  set: function type() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "type_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStyleElement', "media", {
  configurable: true,
  enumerable: true,
  get: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "media_get", arguments);
  },
  set: function media() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "media_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStyleElement', "title", {
  configurable: true,
  enumerable: true,
  get: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "title_get", arguments);
  },
  set: function title() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "title_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStyleElement', "sheet", {
  configurable: true,
  enumerable: true,
  get: function sheet() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "sheet_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGStyleElement', "disabled", {
  configurable: true,
  enumerable: true,
  get: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "disabled_get", arguments);
  },
  set: function disabled() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGStyleElement'].prototype, "SVGStyleElement", "disabled_set", arguments);
  }
}, 'prototype');