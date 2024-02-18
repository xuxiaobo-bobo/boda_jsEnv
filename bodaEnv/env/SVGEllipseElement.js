// SVGEllipseElement对象

bodaEnv.memory.globlProtoObj["SVGEllipseElement"] = function SVGEllipseElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGEllipseElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGEllipseElement"], "SVGEllipseElement");
bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGEllipseElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "cx", {
  configurable: true,
  enumerable: true,
  get: {
    cx() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "SVGEllipseElement", "cx_get", arguments);
    }
  }.cx,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "cy", {
  configurable: true,
  enumerable: true,
  get: {
    cy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "SVGEllipseElement", "cy_get", arguments);
    }
  }.cy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "rx", {
  configurable: true,
  enumerable: true,
  get: {
    rx() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "SVGEllipseElement", "rx_get", arguments);
    }
  }.rx,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "ry", {
  configurable: true,
  enumerable: true,
  get: {
    ry() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGEllipseElement"].prototype, "SVGEllipseElement", "ry_get", arguments);
    }
  }.ry,
  set: undefined
});