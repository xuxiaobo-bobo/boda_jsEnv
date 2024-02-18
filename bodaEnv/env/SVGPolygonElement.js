// SVGPolygonElement对象

bodaEnv.memory.globlProtoObj["SVGPolygonElement"] = function SVGPolygonElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGPolygonElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGPolygonElement"], "SVGPolygonElement");
bodaEnv.memory.globlProtoObj["SVGPolygonElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGPolygonElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPolygonElement"].prototype, "points", {
  configurable: true,
  enumerable: true,
  get: {
    points() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPolygonElement"].prototype, "SVGPolygonElement", "points_get", arguments);
    }
  }.points,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPolygonElement"].prototype, "animatedPoints", {
  configurable: true,
  enumerable: true,
  get: {
    animatedPoints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPolygonElement"].prototype, "SVGPolygonElement", "animatedPoints_get", arguments);
    }
  }.animatedPoints,
  set: undefined
});