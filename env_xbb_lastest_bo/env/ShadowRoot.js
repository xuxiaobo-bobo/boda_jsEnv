// ShadowRoot对象

ShadowRoot = function ShadowRoot() {
  let arg = arguments[0];
  if (arg != 'bobo' && !(this instanceof ShadowRoot)) {
    return bodavm.toolsFunc.throwError("TypeError", "Illegal constructor");
  }
  ;
  bodavm.toolsFunc.symbolProperty(this);
  if (arg != 'bobo') {
    console.log_copy('ShadowRoot 实例化对象 --->', JSON.stringify_bo(arguments, function (k, v) {
      if (v == window) {
        return 'window';
      } else {
        return v;
      }
    }));
  }
  ;
};
bodavm.toolsFunc.safeProto(ShadowRoot, "ShadowRoot");
ShadowRoot.prototype.__proto__ = DocumentFragment.prototype;
ShadowRoot.__proto__ = DocumentFragment;
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "mode", {
  configurable: true,
  enumerable: true,
  get: function mode() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "mode_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "host", {
  configurable: true,
  enumerable: true,
  get: function host() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "host_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "onslotchange", {
  configurable: true,
  enumerable: true,
  get: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "onslotchange_get", arguments);
  },
  set: function onslotchange() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "onslotchange_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "innerHTML", {
  configurable: true,
  enumerable: true,
  get: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "innerHTML_get", arguments);
  },
  set: function innerHTML() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "innerHTML_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "delegatesFocus", {
  configurable: true,
  enumerable: true,
  get: function delegatesFocus() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "delegatesFocus_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "slotAssignment", {
  configurable: true,
  enumerable: true,
  get: function slotAssignment() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "slotAssignment_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "pictureInPictureElement", {
  configurable: true,
  enumerable: true,
  get: function pictureInPictureElement() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "pictureInPictureElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "activeElement", {
  configurable: true,
  enumerable: true,
  get: function activeElement() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "activeElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "styleSheets", {
  configurable: true,
  enumerable: true,
  get: function styleSheets() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "styleSheets_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "pointerLockElement", {
  configurable: true,
  enumerable: true,
  get: function pointerLockElement() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "pointerLockElement_get", arguments);
  },
  set: undefined
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "fullscreenElement", {
  configurable: true,
  enumerable: true,
  get: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "fullscreenElement_get", arguments);
  },
  set: function fullscreenElement() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "fullscreenElement_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "adoptedStyleSheets", {
  configurable: true,
  enumerable: true,
  get: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "adoptedStyleSheets_get", arguments);
  },
  set: function adoptedStyleSheets() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "adoptedStyleSheets_set", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "elementFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementFromPoint() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "elementFromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "elementsFromPoint", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function elementsFromPoint() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "elementsFromPoint", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "getInnerHTML", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getInnerHTML() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "getInnerHTML", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "getSelection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getSelection() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "getSelection", arguments);
  }
});
bodavm.toolsFunc.defineProperty(ShadowRoot.prototype, "getAnimations", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function getAnimations() {
    return bodavm.toolsFunc.dispatch(this, ShadowRoot.prototype, "ShadowRoot", "getAnimations", arguments);
  }
});