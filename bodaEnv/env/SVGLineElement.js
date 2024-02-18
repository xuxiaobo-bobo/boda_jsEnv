// SVGLineElement对象

bodaEnv.memory.globlProtoObj["SVGLineElement"] = function SVGLineElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGLineElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGLineElement"], "SVGLineElement");
bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGLineElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGeometryElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "x1", {
  configurable: true,
  enumerable: true,
  get: {
    x1() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "SVGLineElement", "x1_get", arguments);
    }
  }.x1,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "y1", {
  configurable: true,
  enumerable: true,
  get: {
    y1() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "SVGLineElement", "y1_get", arguments);
    }
  }.y1,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "x2", {
  configurable: true,
  enumerable: true,
  get: {
    x2() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "SVGLineElement", "x2_get", arguments);
    }
  }.x2,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "y2", {
  configurable: true,
  enumerable: true,
  get: {
    y2() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGLineElement"].prototype, "SVGLineElement", "y2_get", arguments);
    }
  }.y2,
  set: undefined
});