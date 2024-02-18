// SVGUnitTypes对象

bodaEnv.memory.globlProtoObj["SVGUnitTypes"] = function SVGUnitTypes() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGUnitTypes 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGUnitTypes"], "SVGUnitTypes");
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGUnitTypes"], "SVG_UNIT_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGUnitTypes"], "SVG_UNIT_TYPE_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGUnitTypes"], "SVG_UNIT_TYPE_OBJECTBOUNDINGBOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGUnitTypes"].prototype, "SVG_UNIT_TYPE_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGUnitTypes"].prototype, "SVG_UNIT_TYPE_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGUnitTypes"].prototype, "SVG_UNIT_TYPE_OBJECTBOUNDINGBOX", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});