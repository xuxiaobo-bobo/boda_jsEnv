// SVGAnimationElement对象

SVGAnimationElement = function SVGAnimationElement() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof SVGAnimationElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('SVGAnimationElement 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(SVGAnimationElement, "SVGAnimationElement");
SVGAnimationElement.prototype.__proto__ = SVGElement.prototype;
SVGAnimationElement.__proto__ = SVGElement;
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "targetElement", {
  configurable: true,
  enumerable: true,
  get: function targetElement() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "targetElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "onbegin", {
  configurable: true,
  enumerable: true,
  get: function onbegin() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "onbegin_get", arguments);
  },
  set: function onbegin() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "onbegin_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "onend", {
  configurable: true,
  enumerable: true,
  get: function onend() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "onend_get", arguments);
  },
  set: function onend() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "onend_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "onrepeat", {
  configurable: true,
  enumerable: true,
  get: function onrepeat() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "onrepeat_get", arguments);
  },
  set: function onrepeat() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "onrepeat_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: function requiredExtensions() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "requiredExtensions_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: function systemLanguage() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "systemLanguage_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "beginElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginElement() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "beginElement", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "beginElementAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginElementAt() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "beginElementAt", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "endElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endElement() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "endElement", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "endElementAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endElementAt() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "endElementAt", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "getCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCurrentTime() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "getCurrentTime", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "getSimpleDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSimpleDuration() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "getSimpleDuration", arguments);
  }
});
bodavm.toolsFunc.defineProperty(SVGAnimationElement.prototype, "getStartTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStartTime() {
    return bodavm.toolsFunc.dispatch(this, SVGAnimationElement.prototype, "SVGAnimationElement", "getStartTime", arguments);
  }
});