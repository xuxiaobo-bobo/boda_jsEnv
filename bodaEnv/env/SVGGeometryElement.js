// SVGGeometryElement对象

bodaEnv.memory.globlProtoObj["SVGGeometryElement"] = function SVGGeometryElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGGeometryElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGGeometryElement"], "SVGGeometryElement");
bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGGeometryElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "pathLength", {
  configurable: true,
  enumerable: true,
  get: {
    pathLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "SVGGeometryElement", "pathLength_get", arguments);
    }
  }.pathLength,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "getPointAtLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPointAtLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "SVGGeometryElement", "getPointAtLength", arguments);
    }
  }.getPointAtLength
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "getTotalLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTotalLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "SVGGeometryElement", "getTotalLength", arguments);
    }
  }.getTotalLength
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "isPointInFill", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isPointInFill() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "SVGGeometryElement", "isPointInFill", arguments);
    }
  }.isPointInFill
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "isPointInStroke", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    isPointInStroke() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype, "SVGGeometryElement", "isPointInStroke", arguments);
    }
  }.isPointInStroke
});