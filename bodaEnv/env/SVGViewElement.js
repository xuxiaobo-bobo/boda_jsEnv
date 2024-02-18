// SVGViewElement对象

bodaEnv.memory.globlProtoObj["SVGViewElement"] = function SVGViewElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGViewElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGViewElement"], "SVGViewElement");
bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGViewElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"], "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"], "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"], "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: {
    viewBox() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "SVGViewElement", "viewBox_get", arguments);
    }
  }.viewBox,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: {
    preserveAspectRatio() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "SVGViewElement", "preserveAspectRatio_get", arguments);
    }
  }.preserveAspectRatio,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "zoomAndPan", {
  configurable: true,
  enumerable: true,
  get: {
    zoomAndPan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "SVGViewElement", "zoomAndPan_get", arguments);
    }
  }.zoomAndPan,
  set: {
    zoomAndPan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "SVGViewElement", "zoomAndPan_set", arguments);
    }
  }.zoomAndPan
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGViewElement"].prototype, "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});