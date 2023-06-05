// SVGImageElement对象

bodavm.memory.globalobj['SVGImageElement'] = function SVGImageElement() {
  console.log_copy('SVGImageElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGImageElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGImageElement'], "SVGImageElement");
bodavm.memory.globalobj['SVGImageElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'].prototype;
bodavm.memory.globalobj['SVGImageElement'].__proto__ = bodavm.memory.globalobj['SVGGraphicsElement'];
bodavm.toolsFunc.defineProperty('SVGImageElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGImageElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGImageElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGImageElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGImageElement', "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGImageElement', "decoding", {
  configurable: true,
  enumerable: true,
  get: function decoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "decoding_get", arguments);
  },
  set: function decoding() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "decoding_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGImageElement', "href", {
  configurable: true,
  enumerable: true,
  get: function href() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "href_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGImageElement', "decode", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function decode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGImageElement'].prototype, "SVGImageElement", "decode", arguments);
  }
}, 'prototype');