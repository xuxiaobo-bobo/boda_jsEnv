// SVGMaskElement对象

bodavm.memory.globalobj['SVGMaskElement'] = function SVGMaskElement() {
  console.log_copy('SVGMaskElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGMaskElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGMaskElement'], "SVGMaskElement");
bodavm.memory.globalobj['SVGMaskElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGMaskElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGMaskElement', "maskUnits", {
  configurable: true,
  enumerable: true,
  get: function maskUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "maskUnits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMaskElement', "maskContentUnits", {
  configurable: true,
  enumerable: true,
  get: function maskContentUnits() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "maskContentUnits_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMaskElement', "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "x_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMaskElement', "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "y_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMaskElement', "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "width_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMaskElement', "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "height_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMaskElement', "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: function requiredExtensions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "requiredExtensions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGMaskElement', "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: function systemLanguage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGMaskElement'].prototype, "SVGMaskElement", "systemLanguage_get", arguments);
  },
  set: undefined
}, 'prototype');