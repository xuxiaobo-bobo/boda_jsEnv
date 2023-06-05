// SVGUnitTypes对象

bodavm.memory.globalobj['SVGUnitTypes'] = function SVGUnitTypes() {
  console.log_copy('SVGUnitTypes 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGUnitTypes)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGUnitTypes'], "SVGUnitTypes");
bodavm.toolsFunc.defineProperty('SVGUnitTypes', "SVG_UNIT_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty('SVGUnitTypes', "SVG_UNIT_TYPE_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty('SVGUnitTypes', "SVG_UNIT_TYPE_OBJECTBOUNDINGBOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty('SVGUnitTypes', "SVG_UNIT_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGUnitTypes', "SVG_UNIT_TYPE_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGUnitTypes', "SVG_UNIT_TYPE_OBJECTBOUNDINGBOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
}, 'prototype');