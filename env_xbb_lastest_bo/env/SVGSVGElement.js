// SVGSVGElement对象

SVGSVGElement = function SVGSVGElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGSVGElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGSVGElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGSVGElement, "SVGSVGElement");
SVGSVGElement.prototype.__proto__ = SVGGraphicsElement.prototype;
SVGSVGElement.__proto__ = SVGGraphicsElement;
bodavm.toolsFunc.defineProperty(SVGSVGElement, "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGSVGElement, "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGSVGElement, "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "x", {
  configurable: true,
  enumerable: true,
  get: function x() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "x_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "y", {
  configurable: true,
  enumerable: true,
  get: function y() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "y_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "width", {
  configurable: true,
  enumerable: true,
  get: function width() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "width_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "height", {
  configurable: true,
  enumerable: true,
  get: function height() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "height_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "currentScale", {
  configurable: true,
  enumerable: true,
  get: function currentScale() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "currentScale_get", arguments);
  },
  set: function currentScale() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "currentScale_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "currentTranslate", {
  configurable: true,
  enumerable: true,
  get: function currentTranslate() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "currentTranslate_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "viewBox", {
  configurable: true,
  enumerable: true,
  get: function viewBox() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "viewBox_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "preserveAspectRatio", {
  configurable: true,
  enumerable: true,
  get: function preserveAspectRatio() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "preserveAspectRatio_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "zoomAndPan", {
  configurable: true,
  enumerable: true,
  get: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "zoomAndPan_get", arguments);
  },
  set: function zoomAndPan() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "zoomAndPan_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "SVG_ZOOMANDPAN_UNKNOWN", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "SVG_ZOOMANDPAN_DISABLE", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 1
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "SVG_ZOOMANDPAN_MAGNIFY", {
  configurable: false,
  enumerable: true,
  writable: false,
  value: 2
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "animationsPaused", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function animationsPaused() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "animationsPaused", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "checkEnclosure", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkEnclosure() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "checkEnclosure", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "checkIntersection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function checkIntersection() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "checkIntersection", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGAngle", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGAngle() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGAngle", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGLength", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGLength() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGLength", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGMatrix() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGNumber", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGNumber() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGNumber", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGPoint() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGRect", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGRect() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGRect", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGTransform", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGTransform() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGTransform", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "createSVGTransformFromMatrix", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function createSVGTransformFromMatrix() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "createSVGTransformFromMatrix", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "deselectAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function deselectAll() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "deselectAll", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "forceRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function forceRedraw() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "forceRedraw", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCurrentTime() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getCurrentTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getElementById", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getElementById() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getElementById", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getEnclosureList", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getEnclosureList() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getEnclosureList", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "getIntersectionList", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getIntersectionList() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "getIntersectionList", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "pauseAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function pauseAnimations() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "pauseAnimations", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "setCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function setCurrentTime() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "setCurrentTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "suspendRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function suspendRedraw() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "suspendRedraw", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "unpauseAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unpauseAnimations() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "unpauseAnimations", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "unsuspendRedraw", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsuspendRedraw() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "unsuspendRedraw", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGSVGElement.prototype, "unsuspendRedrawAll", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function unsuspendRedrawAll() {
    return bodavm.toolsFunc.dispatch(this, SVGSVGElement.prototype, "SVGSVGElement", "unsuspendRedrawAll", arguments);
  }
});