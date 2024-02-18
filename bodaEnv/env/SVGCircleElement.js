// SVGCircleElement对象

bodaEnv.memory.globlProtoObj["SVGCircleElement"] = function SVGCircleElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGCircleElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGCircleElement"], "SVGCircleElement");
bodaEnv.memory.globlProtoObj["SVGCircleElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGCircleElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGCircleElement"].prototype, "cx", {
  configurable: true,
  enumerable: true,
  get: {
    cx() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGCircleElement"].prototype, "SVGCircleElement", "cx_get", arguments);
    }
  }.cx,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGCircleElement"].prototype, "cy", {
  configurable: true,
  enumerable: true,
  get: {
    cy() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGCircleElement"].prototype, "SVGCircleElement", "cy_get", arguments);
    }
  }.cy,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGCircleElement"].prototype, "r", {
  configurable: true,
  enumerable: true,
  get: {
    r() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGCircleElement"].prototype, "SVGCircleElement", "r_get", arguments);
    }
  }.r,
  set: undefined
});