// SVGPolylineElement对象

bodaEnv.memory.globlProtoObj["SVGPolylineElement"] = function SVGPolylineElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGPolylineElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGPolylineElement"], "SVGPolylineElement");
bodaEnv.memory.globlProtoObj["SVGPolylineElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGPolylineElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPolylineElement"].prototype, "points", {
  configurable: true,
  enumerable: true,
  get: {
    points() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPolylineElement"].prototype, "SVGPolylineElement", "points_get", arguments);
    }
  }.points,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGPolylineElement"].prototype, "animatedPoints", {
  configurable: true,
  enumerable: true,
  get: {
    animatedPoints() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGPolylineElement"].prototype, "SVGPolylineElement", "animatedPoints_get", arguments);
    }
  }.animatedPoints,
  set: undefined
});