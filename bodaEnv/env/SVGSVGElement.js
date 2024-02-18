// SVGSVGElement对象

bodaEnv.memory.globlProtoObj["SVGSVGElement"] = function SVGSVGElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGSVGElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGSVGElement"], "SVGSVGElement");
bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGSVGElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGGraphicsElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"], "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"], "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"], "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "x", {
  configurable: true,
  enumerable: true,
  get: {
    x() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "x_get", arguments);
    }
  }.x,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "y", {
  configurable: true,
  enumerable: true,
  get: {
    y() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "y_get", arguments);
    }
  }.y,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "width", {
  configurable: true,
  enumerable: true,
  get: {
    width() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "width_get", arguments);
    }
  }.width,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "height", {
  configurable: true,
  enumerable: true,
  get: {
    height() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "height_get", arguments);
    }
  }.height,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "currentScale", {
  configurable: true,
  enumerable: true,
  get: {
    currentScale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "currentScale_get", arguments);
    }
  }.currentScale,
  set: {
    currentScale() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "currentScale_set", arguments);
    }
  }.currentScale
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "currentTranslate", {
  configurable: true,
  enumerable: true,
  get: {
    currentTranslate() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "currentTranslate_get", arguments);
    }
  }.currentTranslate,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: {
    viewBox() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "viewBox_get", arguments);
    }
  }.viewBox,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: {
    preserveAspectRatio() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "preserveAspectRatio_get", arguments);
    }
  }.preserveAspectRatio,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "zoomAndPan", {
  configurable: true,
  enumerable: true,
  get: {
    zoomAndPan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "zoomAndPan_get", arguments);
    }
  }.zoomAndPan,
  set: {
    zoomAndPan() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "zoomAndPan_set", arguments);
    }
  }.zoomAndPan
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "animationsPaused", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    animationsPaused() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "animationsPaused", arguments);
    }
  }.animationsPaused
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "checkEnclosure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkEnclosure() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "checkEnclosure", arguments);
    }
  }.checkEnclosure
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "checkIntersection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    checkIntersection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "checkIntersection", arguments);
    }
  }.checkIntersection
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGAngle() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGAngle", arguments);
    }
  }.createSVGAngle
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGLength() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGLength", arguments);
    }
  }.createSVGLength
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGMatrix", arguments);
    }
  }.createSVGMatrix
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGNumber", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGNumber() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGNumber", arguments);
    }
  }.createSVGNumber
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGPoint", arguments);
    }
  }.createSVGPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGRect() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGRect", arguments);
    }
  }.createSVGRect
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGTransform() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGTransform", arguments);
    }
  }.createSVGTransform
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "createSVGTransformFromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    createSVGTransformFromMatrix() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "createSVGTransformFromMatrix", arguments);
    }
  }.createSVGTransformFromMatrix
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "deselectAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    deselectAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "deselectAll", arguments);
    }
  }.deselectAll
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "forceRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    forceRedraw() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "forceRedraw", arguments);
    }
  }.forceRedraw
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "getCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCurrentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "getCurrentTime", arguments);
    }
  }.getCurrentTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getElementById() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "getElementById", arguments);
    }
  }.getElementById
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "getEnclosureList", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getEnclosureList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "getEnclosureList", arguments);
    }
  }.getEnclosureList
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "getIntersectionList", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getIntersectionList() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "getIntersectionList", arguments);
    }
  }.getIntersectionList
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "pauseAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pauseAnimations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "pauseAnimations", arguments);
    }
  }.pauseAnimations
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "setCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setCurrentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "setCurrentTime", arguments);
    }
  }.setCurrentTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "suspendRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    suspendRedraw() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "suspendRedraw", arguments);
    }
  }.suspendRedraw
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "unpauseAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unpauseAnimations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "unpauseAnimations", arguments);
    }
  }.unpauseAnimations
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "unsuspendRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unsuspendRedraw() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "unsuspendRedraw", arguments);
    }
  }.unsuspendRedraw
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "unsuspendRedrawAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    unsuspendRedrawAll() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGSVGElement"].prototype, "SVGSVGElement", "unsuspendRedrawAll", arguments);
    }
  }.unsuspendRedrawAll
});