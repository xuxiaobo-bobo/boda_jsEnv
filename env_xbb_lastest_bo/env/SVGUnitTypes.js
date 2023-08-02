// SVGUnitTypes对象

SVGUnitTypes = function SVGUnitTypes() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGUnitTypes)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGUnitTypes 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGUnitTypes, "SVGUnitTypes");
bodavm.toolsFunc.defineProperty(SVGUnitTypes, "SVG_UNIT_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGUnitTypes, "SVG_UNIT_TYPE_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGUnitTypes, "SVG_UNIT_TYPE_OBJECTBOUNDINGBOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGUnitTypes.prototype, "SVG_UNIT_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGUnitTypes.prototype, "SVG_UNIT_TYPE_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGUnitTypes.prototype, "SVG_UNIT_TYPE_OBJECTBOUNDINGBOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});