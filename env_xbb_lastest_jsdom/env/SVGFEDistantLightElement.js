// SVGFEDistantLightElement对象

bodavm.memory.globalobj['SVGFEDistantLightElement'] = function SVGFEDistantLightElement() {
  console.log_copy('SVGFEDistantLightElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGFEDistantLightElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGFEDistantLightElement'], "SVGFEDistantLightElement");
bodavm.memory.globalobj['SVGFEDistantLightElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGFEDistantLightElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGFEDistantLightElement', "azimuth", {
  configurable: true,
  enumerable: true,
  get: function azimuth() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDistantLightElement'].prototype, "SVGFEDistantLightElement", "azimuth_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGFEDistantLightElement', "elevation", {
  configurable: true,
  enumerable: true,
  get: function elevation() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGFEDistantLightElement'].prototype, "SVGFEDistantLightElement", "elevation_get", arguments);
  },
  set: undefined
}, 'prototype');