// ShadowRoot对象

bodaEnv.memory.globlProtoObj["ShadowRoot"] = function ShadowRoot() {
  let arg = arguments[0];
  if (arg != 'bobo') {
    bodaEnv.toolsFunc.console_copy('ShadowRoot 实例化对象 --->', bodaEnv.toolsFunc.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodaEnv.toolsFunc.safeProto(bodaEnv.memory.globlProtoObj["ShadowRoot"], "ShadowRoot");
bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype.__proto__ = bodaEnv.memory.globlProtoObj["DocumentFragment"].prototype;
bodaEnv.memory.globlProtoObj["ShadowRoot"].__proto__ = bodaEnv.memory.globlProtoObj["DocumentFragment"];
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: {
    mode() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "mode_get", arguments);
    }
  }.mode,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "host", {
  configurable: true,
  enumerable: true,
  get: {
    host() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "host_get", arguments);
    }
  }.host,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "onslotchange_get", arguments);
    }
  }.onslotchange,
  set: {
    onslotchange() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "onslotchange_set", arguments);
    }
  }.onslotchange
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "innerHTML", {
  configurable: true,
  enumerable: true,
  get: {
    innerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "innerHTML_get", arguments);
    }
  }.innerHTML,
  set: {
    innerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "innerHTML_set", arguments);
    }
  }.innerHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "delegatesFocus", {
  configurable: true,
  enumerable: true,
  get: {
    delegatesFocus() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "delegatesFocus_get", arguments);
    }
  }.delegatesFocus,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "slotAssignment", {
  configurable: true,
  enumerable: true,
  get: {
    slotAssignment() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "slotAssignment_get", arguments);
    }
  }.slotAssignment,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "activeElement", {
  configurable: true,
  enumerable: true,
  get: {
    activeElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "activeElement_get", arguments);
    }
  }.activeElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "styleSheets", {
  configurable: true,
  enumerable: true,
  get: {
    styleSheets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "styleSheets_get", arguments);
    }
  }.styleSheets,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "pointerLockElement", {
  configurable: true,
  enumerable: true,
  get: {
    pointerLockElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "pointerLockElement_get", arguments);
    }
  }.pointerLockElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "fullscreenElement", {
  configurable: true,
  enumerable: true,
  get: {
    fullscreenElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "fullscreenElement_get", arguments);
    }
  }.fullscreenElement,
  set: {
    fullscreenElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "fullscreenElement_set", arguments);
    }
  }.fullscreenElement
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "adoptedStyleSheets", {
  configurable: true,
  enumerable: true,
  get: {
    adoptedStyleSheets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "adoptedStyleSheets_get", arguments);
    }
  }.adoptedStyleSheets,
  set: {
    adoptedStyleSheets() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "adoptedStyleSheets_set", arguments);
    }
  }.adoptedStyleSheets
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "pictureInPictureElement", {
  configurable: true,
  enumerable: true,
  get: {
    pictureInPictureElement() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "pictureInPictureElement_get", arguments);
    }
  }.pictureInPictureElement,
  set: undefined
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "elementFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    elementFromPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "elementFromPoint", arguments);
    }
  }.elementFromPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "elementsFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    elementsFromPoint() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "elementsFromPoint", arguments);
    }
  }.elementsFromPoint
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "getInnerHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getInnerHTML() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "getInnerHTML", arguments);
    }
  }.getInnerHTML
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getSelection() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "getSelection", arguments);
    }
  }.getSelection
});
bodaEnv.toolsFunc.defineProperty(bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getAnimations() {
      return bodaEnv.toolsFunc.dispatch(this, bodaEnv.memory.globlProtoObj["ShadowRoot"].prototype, "ShadowRoot", "getAnimations", arguments);
    }
  }.getAnimations
});