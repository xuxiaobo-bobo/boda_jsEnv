// SVGMarkerElement对象

SVGMarkerElement = function SVGMarkerElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGMarkerElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGMarkerElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGMarkerElement, "SVGMarkerElement");
SVGMarkerElement.prototype.__proto__ = SVGElement.prototype;
SVGMarkerElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGMarkerElement, "SVG_MARKERUNITS_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement, "SVG_MARKERUNITS_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement, "SVG_MARKERUNITS_STROKEWIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement, "SVG_MARKER_ORIENT_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement, "SVG_MARKER_ORIENT_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement, "SVG_MARKER_ORIENT_ANGLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "refX", {
  configurable: true,
  enumerable: true,
  get: function refX() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "refX_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "refY", {
  configurable: true,
  enumerable: true,
  get: function refY() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "refY_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "markerUnits", {
  configurable: true,
  enumerable: true,
  get: function markerUnits() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "markerUnits_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "markerWidth", {
  configurable: true,
  enumerable: true,
  get: function markerWidth() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "markerWidth_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "markerHeight", {
  configurable: true,
  enumerable: true,
  get: function markerHeight() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "markerHeight_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "orientType", {
  configurable: true,
  enumerable: true,
  get: function orientType() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "orientType_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "orientAngle", {
  configurable: true,
  enumerable: true,
  get: function orientAngle() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "orientAngle_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "viewBox_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "SVG_MARKERUNITS_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "SVG_MARKERUNITS_USERSPACEONUSE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "SVG_MARKERUNITS_STROKEWIDTH", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "SVG_MARKER_ORIENT_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "SVG_MARKER_ORIENT_AUTO", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "SVG_MARKER_ORIENT_ANGLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "setOrientToAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientToAngle() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "setOrientToAngle", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGMarkerElement.prototype, "setOrientToAuto", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setOrientToAuto() {
    return bodavm.toolsFunc.dispatch(this, SVGMarkerElement.prototype, "SVGMarkerElement", "setOrientToAuto", arguments);
  }
});