// SVGMarkerElement对象

bodaEnv.memory.globlProtoObj["SVGMarkerElement"] = function SVGMarkerElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGMarkerElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGMarkerElement"], "SVGMarkerElement");
bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGMarkerElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"], "SVG_MARKERUNITS_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"], "SVG_MARKERUNITS_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"], "SVG_MARKERUNITS_STROKEWIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"], "SVG_MARKER_ORIENT_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"], "SVG_MARKER_ORIENT_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"], "SVG_MARKER_ORIENT_ANGLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "refX", {
  configurable: true,
  enumerable: true,
  get: {
    refX() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "refX_get", arguments);
    }
  }.refX,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "refY", {
  configurable: true,
  enumerable: true,
  get: {
    refY() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "refY_get", arguments);
    }
  }.refY,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "markerUnits", {
  configurable: true,
  enumerable: true,
  get: {
    markerUnits() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "markerUnits_get", arguments);
    }
  }.markerUnits,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "markerWidth", {
  configurable: true,
  enumerable: true,
  get: {
    markerWidth() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "markerWidth_get", arguments);
    }
  }.markerWidth,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "markerHeight", {
  configurable: true,
  enumerable: true,
  get: {
    markerHeight() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "markerHeight_get", arguments);
    }
  }.markerHeight,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "orientType", {
  configurable: true,
  enumerable: true,
  get: {
    orientType() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "orientType_get", arguments);
    }
  }.orientType,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "orientAngle", {
  configurable: true,
  enumerable: true,
  get: {
    orientAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "orientAngle_get", arguments);
    }
  }.orientAngle,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: {
    viewBox() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "viewBox_get", arguments);
    }
  }.viewBox,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: {
    preserveAspectRatio() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "preserveAspectRatio_get", arguments);
    }
  }.preserveAspectRatio,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVG_MARKERUNITS_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVG_MARKERUNITS_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVG_MARKERUNITS_STROKEWIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVG_MARKER_ORIENT_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVG_MARKER_ORIENT_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVG_MARKER_ORIENT_ANGLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "setOrientToAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setOrientToAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "setOrientToAngle", arguments);
    }
  }.setOrientToAngle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "setOrientToAuto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setOrientToAuto() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGMarkerElement"].prototype, "SVGMarkerElement", "setOrientToAuto", arguments);
    }
  }.setOrientToAuto
});