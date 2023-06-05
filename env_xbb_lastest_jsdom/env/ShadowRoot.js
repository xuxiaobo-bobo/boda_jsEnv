// ShadowRoot对象

bodavm.memory.globalobj['ShadowRoot'] = function ShadowRoot() {
  console.log_copy('ShadowRoot 实例化对象参数为 ->', JSON.stringify_bo(arguments, function (k, v) {
    if (v == window) {
      return 'window';
    } else {
      return v;
    }
  }));
  if (!(this instanceof ShadowRoot)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  this._boisinit = bodavm.config.isinit;
};
bodavm.toolsFunc.safeProto(bodavm.memory.globalobj['ShadowRoot'], "ShadowRoot");
bodavm.memory.globalobj['ShadowRoot'].prototype.__proto__ = bodavm.memory.globalobj['DocumentFragment'].prototype;
bodavm.memory.globalobj['ShadowRoot'].__proto__ = bodavm.memory.globalobj['DocumentFragment'];
bodavm.toolsFunc.defineProperty('ShadowRoot', "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "mode_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "host_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "onslotchange_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "innerHTML", {
  configurable: true,
  enumerable: true,
  get: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "innerHTML_get", arguments);
  },
  set: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "innerHTML_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "delegatesFocus", {
  configurable: true,
  enumerable: true,
  get: function delegatesFocus() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "delegatesFocus_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "slotAssignment", {
  configurable: true,
  enumerable: true,
  get: function slotAssignment() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "slotAssignment_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "pictureInPictureElement", {
  configurable: true,
  enumerable: true,
  get: function pictureInPictureElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "pictureInPictureElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "activeElement", {
  configurable: true,
  enumerable: true,
  get: function activeElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "activeElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "styleSheets", {
  configurable: true,
  enumerable: true,
  get: function styleSheets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "styleSheets_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "pointerLockElement", {
  configurable: true,
  enumerable: true,
  get: function pointerLockElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "pointerLockElement_get", arguments);
  },
  set: undefined
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "fullscreenElement", {
  configurable: true,
  enumerable: true,
  get: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "fullscreenElement_get", arguments);
  },
  set: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "fullscreenElement_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "adoptedStyleSheets", {
  configurable: true,
  enumerable: true,
  get: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "adoptedStyleSheets_get", arguments);
  },
  set: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "adoptedStyleSheets_set", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "elementFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementFromPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "elementFromPoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "elementsFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementsFromPoint() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "elementsFromPoint", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "getInnerHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInnerHTML() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "getInnerHTML", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSelection() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "getSelection", arguments);
  }
}, 'prototype');
bodavm.toolsFunc.defineProperty('ShadowRoot', "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAnimations() {
    return bodavm.toolsFunc.dispatch(this, bodavm.memory.globalobj['ShadowRoot'].prototype, "ShadowRoot", "getAnimations", arguments);
  }
}, 'prototype');