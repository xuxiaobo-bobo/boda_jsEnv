// SVGAnimationElement对象

bodaEnv.memory.globlProtoObj["SVGAnimationElement"] = function SVGAnimationElement() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('SVGAnimationElement 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["SVGAnimationElement"], "SVGAnimationElement");
bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"].prototype;
bodaEnv.memory.globlProtoObj["SVGAnimationElement"].__proto__ = bodaEnv.memory.globlProtoObj["SVGElement"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "targetElement", {
  configurable: true,
  enumerable: true,
  get: {
    targetElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "targetElement_get", arguments);
    }
  }.targetElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "onbegin", {
  configurable: true,
  enumerable: true,
  get: {
    onbegin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "onbegin_get", arguments);
    }
  }.onbegin,
  set: {
    onbegin() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "onbegin_set", arguments);
    }
  }.onbegin
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "onend", {
  configurable: true,
  enumerable: true,
  get: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "onend_get", arguments);
    }
  }.onend,
  set: {
    onend() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "onend_set", arguments);
    }
  }.onend
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "onrepeat", {
  configurable: true,
  enumerable: true,
  get: {
    onrepeat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "onrepeat_get", arguments);
    }
  }.onrepeat,
  set: {
    onrepeat() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "onrepeat_set", arguments);
    }
  }.onrepeat
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: {
    requiredExtensions() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "requiredExtensions_get", arguments);
    }
  }.requiredExtensions,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: {
    systemLanguage() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "systemLanguage_get", arguments);
    }
  }.systemLanguage,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "beginElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "beginElement", arguments);
    }
  }.beginElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "beginElementAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    beginElementAt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "beginElementAt", arguments);
    }
  }.beginElementAt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "endElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    endElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "endElement", arguments);
    }
  }.endElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "endElementAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    endElementAt() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "endElementAt", arguments);
    }
  }.endElementAt
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "getCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getCurrentTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "getCurrentTime", arguments);
    }
  }.getCurrentTime
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "getSimpleDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSimpleDuration() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "getSimpleDuration", arguments);
    }
  }.getSimpleDuration
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "getStartTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getStartTime() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["SVGAnimationElement"].prototype, "SVGAnimationElement", "getStartTime", arguments);
    }
  }.getStartTime
});