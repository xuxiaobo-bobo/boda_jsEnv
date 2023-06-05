// SVGAnimationElement对象

bodavm.memory.globalobj['SVGAnimationElement'] = function SVGAnimationElement() {
  console.log_copy('SVGAnimationElement 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof SVGAnimationElement)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['SVGAnimationElement'], "SVGAnimationElement");
bodavm.memory.globalobj['SVGAnimationElement'].prototype.__proto__ = bodavm.memory.globalobj['SVGElement'].prototype;
bodavm.memory.globalobj['SVGAnimationElement'].__proto__ = bodavm.memory.globalobj['SVGElement'];
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "targetElement", {
  configurable: true,
  enumerable: true,
  get: function targetElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "targetElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "onbegin", {
  configurable: true,
  enumerable: true,
  get: function onbegin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "onbegin_get", arguments);
  },
  set: function onbegin() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "onbegin_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "onend", {
  configurable: true,
  enumerable: true,
  get: function onend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "onend_get", arguments);
  },
  set: function onend() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "onend_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "onrepeat", {
  configurable: true,
  enumerable: true,
  get: function onrepeat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "onrepeat_get", arguments);
  },
  set: function onrepeat() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "onrepeat_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "requiredExtensions", {
  configurable: true,
  enumerable: true,
  get: function requiredExtensions() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "requiredExtensions_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "systemLanguage", {
  configurable: true,
  enumerable: true,
  get: function systemLanguage() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "systemLanguage_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "beginElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "beginElement", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "beginElementAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function beginElementAt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "beginElementAt", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "endElement", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "endElement", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "endElementAt", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function endElementAt() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "endElementAt", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "getCurrentTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getCurrentTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "getCurrentTime", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "getSimpleDuration", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSimpleDuration() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "getSimpleDuration", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('SVGAnimationElement', "getStartTime", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getStartTime() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['SVGAnimationElement'].prototype, "SVGAnimationElement", "getStartTime", arguments);
  }
}, 'prototype');